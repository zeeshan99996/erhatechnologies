import sharp from 'sharp';

const inputPath = 'C:/Users/surface/.gemini/antigravity/brain/0fdd2c0d-9bb5-46e9-ba84-a9d1bc3ebf0c/.user_uploaded/media_1787558652518.png';
const outputPath = 'c:/Users/surface/OneDrive/Desktop/PROJECTS/ERHA TECHNOLOGIES/ERHA TECHNOLOGIES/src/assets/erha-tradelink-preview.png';

async function processImage() {
  // Extract and resize to crisp 1024x510
  await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 1024, height: 510 })
    .resize(1024, 510)
    .toFile(outputPath);
  console.log('Image cropped successfully!');
}

processImage().catch(console.error);
