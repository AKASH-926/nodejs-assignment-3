const fs = require("fs");
const http = require("http");
fs.writeFile(
  "index.html",
  `<h1>Hello World</h1><p> This is Akash </p>`,
  (err) => {
    console.log(err);
  }
);

const server = http.createServer();
server.on("request", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.write(data);
    res.end();
  });
});
server.listen(5000, () => {
  console.log("server up at port 5000");
});
