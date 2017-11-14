require('colors');

global.sysPath = require('path');
global.packageJSON = require('../package.json');

const helpTitle = `===================== Fxxk ${packageJSON.version} ====================\n`;

const info = type => (...args) => console.log(type + Array.prototype.join.call(args, ' '));
global.log = {
  title: () => console.info(helpTitle.green),
  error: info(('[error] ').red),
  warn: info(('[warn] ').yellow),
  info: info(('[info] ').blue),
  mock: info(('[mock] ').cyan),
};

