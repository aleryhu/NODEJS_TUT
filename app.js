/** @format */

let http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // var text = fs.readFileSync('./content/big.txt', 'utf-8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      console.log(err);
    });
  })
  .listen(5000);
