const express = require('express');
const path = require('path');

const app = express();

const port = 3030;
const folderPath = process.argv[2];

if (!folderPath) {
    console.error('Please provide a valid folder path');
    process.exit(1);
}

app.use(express.static(path.resolve(__dirname, folderPath)));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
