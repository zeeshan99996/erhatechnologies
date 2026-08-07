export function FloatingSocialBar() {
  return (
    <aside className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-40">
      <div className="w-[1.5px] h-16 bg-gradient-to-b from-transparent via-slate-600 to-slate-700 mb-1" />
      <a
        href="https://www.facebook.com/people/Erha-Technologies/61592220862497/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[#45DDFD] hover:bg-[#38bdf8] text-slate-950 flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(69,221,253,0.6)]"
        aria-label="Facebook"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href="https://www.tiktok.com/@erhatechnologies"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white hover:bg-[#45DDFD] text-slate-950 flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(69,221,253,0.6)]"
        aria-label="TikTok"
      >
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.95-1.72-.07 2.39-.19 4.79-.37 7.18-.32 3.3-3.21 5.92-6.52 5.56-3.32-.36-5.88-3.48-5.38-6.8.44-2.91 3.07-5.07 6.01-4.7 0 1.28.01 2.57.01 3.86-1.54-.15-3.08.73-3.59 2.2-.62 1.79.47 3.85 2.37 4.17 1.74.29 3.44-1.01 3.58-2.76.13-2.94.13-5.88.19-8.82-.02-2.76-.01-5.52-.01-8.28z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/erha-technologies/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white hover:bg-[#45DDFD] text-slate-950 flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(69,221,253,0.6)]"
        aria-label="LinkedIn"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/erhatechnologies"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white hover:bg-[#45DDFD] text-slate-950 flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(69,221,253,0.6)]"
        aria-label="Instagram"
      >
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </aside>
  );
}
