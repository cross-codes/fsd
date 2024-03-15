import http from "http";
import request from "request";

const url = "http://worldtimeapi.org/api/timezone/America/New_York";
http.createServer(function(inRequest, inResponse) {
  request(url, function(inErr, inResp, inBody) {
    inResponse.end(`Hello from my first Node Web Server: ${inBody}`);
  });
}).listen(8080);
