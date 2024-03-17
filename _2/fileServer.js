import fs from "fs";
import http from "http";
import https from "https";

// How a HTTPS server behaves
const server = https.createServer(
  {
    key: fs.readFileSync("my_key.pem"),
    cert: fs.readFileSync("my_cert.pem"),
  },
  function(inRequest, inResponse) {
    inResponse.writeHead(200);
    inResponse.end("Protected by TLS");
  },
).listen(443);

let finalResponse = "";

// How to communicate with a HTTP server
const request = http.request(
  {
    hostname: "www.some_remote_system.com",
    port: 80,
    path: "/somAPI",
    method: "POST",
  },
  function(inResponse) {
    console.log(`STATUS: ${inResponse.statusCode}`);
    inResponse.setEncoding("utf8");
    inResponse.on("data", function(inDataChunk) {
      finalResponse += inDataChunk;
    });
    inResponse.on("end", function() {
      console.log(finalResponse);
    });
  },
);

request.write("Some data to send to the request system");
request.end();
