const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
//console.log('args: ', args); 
const [url, filePath] = args;

request(url, (error, response, content) => {
  if (error) {
    console.error(`Error downloading ${url}: ${error}`);
    return;
  }

  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(`Error writing file: ${error}`);
      return;
    }

    console.log(`Downloaded ${url} and saved it as ${filePath}`);
  });
});