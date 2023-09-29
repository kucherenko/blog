# Image Resizer

This is a function to resize images using the `sharp` library.

## Usage

The function takes a base64 encoded image as input along with the desired width and height. It resizes the image and returns the resized image as a base64 encoded string.

## How to Use

1. Import the `resizeImage` function from `image-resizer.ts`.
2. Call the function with the base64 encoded image, width, and height as parameters.



Example:

```typescript
import { resizeImage } from './image-resizer';

const base64Image = '...'; // Base64 encoded image
const width = 300;
const height = 200;

const resizedImage = resizeImage(base64Image, width, height);
console.log(resizedImage);
```
