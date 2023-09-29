# Image Resizer

This project implements a function to resize images using the `sharp` library.

## Installation

1. Clone the repository
2. Install dependencies by running `npm install`

## Usage

1. Import the `imageResizer` function from the `image-resizer.ts` file
2. Call the function with the base64 encoded image, desired width, and height as parameters

## Example

```javascript
const base64Image = '...';
const width = 600;
const height = 400;

const resizedImage = imageResizer(base64Image, width, height);
console.log(resizedImage);
```

## License

This project is licensed under the MIT License.