const http = require("http");

const server = http.createServer((req, resp) => {
  resp.writeHead(200, { "Content-Type": "text/plain" });
  resp.end("xxx");
});

server.listen(3000);
