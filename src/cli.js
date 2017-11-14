
import optimist from 'optimist';

import './global';
import * as devCmd from './commands/dev';

// const buildCmd = require('./commands/build');
// const UtilFs = require('./utils/fs.js');

// let Manager = require('./modules/manager.js');


const initOptions = (cmd) => {
  if (cmd.setOptions) {
    cmd.setOptions(optimist);
  } else if (cmd.set_options) {
    cmd.set_options(optimist);
  }
  optimist.alias('h', 'help');
  optimist.describe('h', '查看帮助');
  const options = optimist.argv;
  options.cwd = process.cwd();
  return options;
};

const cli = {
  run: (option) => {
    log.title();
    devCmd.run();
  },
  help: () => {

  },
};
export default cli;
