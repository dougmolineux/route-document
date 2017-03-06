"use strict";

const fs = require("fs");
const readmeFilename = "./README.md";

let output = "\r\n# Routes\r\n";

exports.document = (app) => {
  app._router.stack.forEach(function(r){
    if (r.route && r.route.path && r.route.path !== "/*"){
      let methods = Object.keys(r.route.methods).map( (m) => m.toUpperCase() ).join();
      output += "- "+methods + " " + r.route.path+"\r\n";
    }
  });
  append(readmeFilename, output, () => {
    console.log("Finished writing to "+readmeFilename+", exiting...");
    process.exit();
  });
};

function append(fn, data, cb) {
  fs.appendFile(fn, data, (err) => {
    if (err) {
      console.log("Error writing to file", fn);
      process.exit(1);
    } else {
      cb();
    }
  });
}
