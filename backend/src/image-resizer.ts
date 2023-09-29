import sharp from 'sharp';

function resizeImage(imageData: string, width: number, height: number): string {
  const inputBuffer = Buffer.from(imageData, 'base64');
  const image = sharp(inputBuffer);
  
  return image.metadata()
    .then((metadata) => {
      // Check if image needs resizing
      if (metadata.width! < width || metadata.height! < height) {
        return imageData;
      }
      
      return image.resize(width, height)
        .toBuffer()
        .then((resizedBuffer) => resizedBuffer.toString('base64'));
    })
    .catch((error) => {
      console.error('Image resizing failed:', error);
      throw error;
    });
}
