const sharp = require('sharp');
const fs = require('fs');

async function processIcon() {
  try {
    const inputPath = 'src/assets/erha-logo.png';
    // Create a 512x512 square image with transparent background, fitting the original logo inside
    await sharp(inputPath)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile('public/favicon.png');
      
    console.log('Successfully created public/favicon.png');
    
    // Copy the same image to apple-touch-icon.png and favicon.ico
    fs.copyFileSync('public/favicon.png', 'public/apple-touch-icon.png');
    fs.copyFileSync('public/favicon.png', 'public/favicon.ico');
    console.log('Successfully copied to apple-touch-icon.png and favicon.ico');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processIcon();
