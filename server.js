const express = require('express');
const path = require('path');

const app = express();
const port = 3030;
const folderPath = process.argv[2];

app.use(express.static(path.resolve(__dirname, folderPath)));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});