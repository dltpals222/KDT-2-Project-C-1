const http = require("http");
const url = require("url");
const querystring = require("querystring");

const hostname = "localhost";
const port = 5000;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);
  const parsedQuery = querystring.parse(parsedUrl.query);
  let body = "";

  request.on("data", (chunk) => {
    body += chunk.toString();
  });

  request.on("end", () => {
    if (request.method === "GET") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end(`Hello, ${parsedQuery.name || "World"}!\n`);
    } else if (request.method === "POST") {
      const parsedBody = querystring.parse(body);
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end(`Hi, ${parsedBody.name || "World"}!\n`);
    } else {
      response.statusCode = 405;
      response.end("This server is not working. Try again with other method");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
