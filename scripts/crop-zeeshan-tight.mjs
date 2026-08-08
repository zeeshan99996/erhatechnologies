import sharp from "sharp";
import path from "path";
import fs from "fs";

// Read original uploaded image
const originalPath = path.resolve("C:/Users/surface/.gemini/antigravity/brain/fe8a0353-401d-4967-8061-e0bd367960ea/media__1786204810896.jpg");
// Wait, let's check original Zeeshan image path or read from src/assets/team-zeeshan-portrait.jpg if available!

const targetPath = path.resolve("src/assets/team-zeeshan-portrait.jpg");
const outputPath = path.resolve("src/assets/team-zeeshan-portrait-tight.jpg");

async function main() {
  const fileData = fs.readFileSync(targetPath);
  const metadata = await sharp(fileData).metadata();
  console.log("Current Dimensions:", metadata.width, metadata.height);

  // We want a tight headshot crop:
  // Instead of full width (768px), we extract a 400x400 square centered on his face!
  const boxSize = Math.floor(metadata.width * 0.52); // ~400px box centered on face
  const leftOffset = Math.floor((metadata.width - boxSize) / 2); // Perfectly centered
  const topOffset = Math.floor(metadata.height * 0.12); // From top of hair to chest

  await sharp(fileData)
    .extract({
      left: leftOffset,
      top: topOffset,
      width: boxSize,
      height: boxSize,
    })
    .toFile(outputPath);

  console.log(`Extracted tight headshot: ${boxSize}x${boxSize} at left:${leftOffset}, top:${topOffset}`);
}

main().catch(console.error);
