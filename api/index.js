const express = require("express");
const ip = require("ip");
var macaddress = require("macaddress");
const app = express();

app.get("/test", (req, res) => {
  macaddress.one().then(function (mac) {
    console.log("Mac address for this host: %s", mac);
  });
  console.log(ip.address());
  res.json("test");
});
// Export the server middleware
module.exports = {
  path: "/api/",
  handler: app,
};
