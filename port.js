const http = require('http');

const PORT = 8081;

const requestHandler = (request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.end('<h1>BackGround</h1>');
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.log('Error at server launch:', err);
  }
  console.log(`Server works at port ${PORT}`);
});
