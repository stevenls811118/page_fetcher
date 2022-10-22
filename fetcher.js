const request = require('request');
const fs = require('fs');

let arg = process.argv.slice(2);
let URL = arg[0];
let filePath = arg[1];

request(URL, (error, response, body) => {

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    } 
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
    // file written successfully
  });  
});


