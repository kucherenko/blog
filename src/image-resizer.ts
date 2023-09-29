import sharp from 'sharp';

function resizeImage(base64Image: string, width: number, height: number): string {
  const buffer = Buffer.from(base64Image, 'base64');

  const image = sharp(buffer);

  return image
    .resize(width, height)
    .toBuffer()
    .then((resizedBuffer: Buffer) => resizedBuffer.toString('base64'));
}