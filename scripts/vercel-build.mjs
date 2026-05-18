/**
 * Vercel Build Output API script for TanStack Start SSR.
 * Runs after `vite build` to create .vercel/output from dist/.
 */
import { build } from 'esbuild'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distServerDir = path.join(rootDir, 'dist', 'server')
const distClientDir = path.join(rootDir, 'dist', 'client')
const vercelOutputDir = path.join(rootDir, '.vercel', 'output')
const staticDir = path.join(vercelOutputDir, 'static')
const funcDir = path.join(vercelOutputDir, 'functions', '__handler.func')

// Clean .vercel/output
fs.rmSync(vercelOutputDir, { recursive: true, force: true })
fs.mkdirSync(staticDir, { recursive: true })
fs.mkdirSync(funcDir, { recursive: true })

// 1. Copy dist/client/ → .vercel/output/static/
if (fs.existsSync(distClientDir)) {
  fs.cpSync(distClientDir, staticDir, { recursive: true })
  console.log('✅ Copied static files')
}

// 2. Write a Node.js adapter that wraps the TanStack Start fetch handler
const adapterCode = `
import serverModule from './server.js'

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost'
  const url = proto + '://' + host + req.url

  const headers = new Headers()
  for (const [k, v] of Object.entries(req.headers)) {
    if (typeof v === 'string') headers.append(k, v)
    else if (Array.isArray(v)) v.forEach(val => headers.append(k, val))
  }

  let body = undefined
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const buf = Buffer.concat(chunks)
    if (buf.length > 0) body = buf
  }

  const request = new Request(url, { method: req.method, headers, body, duplex: body ? 'half' : undefined })
  const response = await serverModule.fetch(request)

  res.statusCode = response.status
  for (const [k, v] of response.headers.entries()) res.setHeader(k, v)

  if (response.body) {
    const reader = response.body.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      res.write(Buffer.from(value))
    }
  }
  res.end()
}
`

const adapterPath = path.join(distServerDir, '_adapter.mjs')
fs.writeFileSync(adapterPath, adapterCode)

// 3. Bundle server + adapter into a single self-contained CJS file
console.log('⚙️  Bundling server with esbuild...')
await build({
  entryPoints: [adapterPath],
  bundle: true,
  outfile: path.join(funcDir, 'index.js'),
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  external: ['node:*', 'async_hooks', 'stream', 'http', 'https', 'net', 'tls', 'events', 'buffer', 'util', 'url', 'path', 'fs', 'os', 'crypto'],
  minify: false,
  logLevel: 'info',
})

// Clean up temp adapter
fs.unlinkSync(adapterPath)
console.log('✅ Server bundled')

// 4. Write .vc-config.json (Vercel function config)
fs.writeFileSync(
  path.join(funcDir, '.vc-config.json'),
  JSON.stringify({ runtime: 'nodejs20.x', handler: 'index.js', maxDuration: 30 }, null, 2)
)

// 4b. Configure Python serverless function for API
const apiFuncDir = path.join(vercelOutputDir, 'functions', 'api', 'index.func')
const srcApiDir = path.join(rootDir, 'api')
if (fs.existsSync(srcApiDir)) {
  fs.mkdirSync(apiFuncDir, { recursive: true })
  fs.cpSync(srcApiDir, apiFuncDir, { recursive: true })
  fs.writeFileSync(
    path.join(apiFuncDir, '.vc-config.json'),
    JSON.stringify({ runtime: 'python3.12', handler: 'index.py', maxDuration: 30 }, null, 2)
  )
  console.log('✅ Configured Python Serverless Function')
}

// 5. Write .vercel/output/config.json (routing)
const config = {
  version: 3,
  routes: [
    // Serve static assets directly, with caching
    { src: '^/assets/(.*)$', headers: { 'cache-control': 'public, max-age=31536000, immutable' }, continue: true },
    // Rewrite all /api/* requests to /api/index (Python Serverless Function)
    { src: '^/api/(.*)$', dest: '/api/index' },
    // Let Vercel serve static files it finds
    { handle: 'filesystem' },
    // Everything else → SSR function
    { src: '/(.*)', dest: '/__handler' },
  ],
}
fs.writeFileSync(path.join(vercelOutputDir, 'config.json'), JSON.stringify(config, null, 2))
console.log('✅ .vercel/output ready for deployment')
