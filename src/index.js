// * 不知道怎么开始..
const path = require('path');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const express = require('express');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');


function createServer(filePath = '.', port = 3000) {
  let cwd = path.resolve(filePath)
  console.log(cwd);
  let app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(serveStatic(cwd))
  app.use(serveIndex(cwd, { icons: true }));
  app.listen(port)

}
createServer('/Users/pengzhen/Documents', argv.p);
