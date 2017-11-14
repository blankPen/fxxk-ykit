

import optimist from 'optimist';
import express from 'express';
import serveStatic from 'serve-static';
import serveIndex from 'serve-index';
import bodyParser from 'body-parser';


export function setOptions(opt) {
  opt.alias('p', 'port');
  opt.describe('p', '端口');
  opt.alias('x', 'proxy');
  opt.describe('x', '开启 proxy 代理服务');
  opt.alias('s', 'https');
  opt.describe('s', '开启 https 服务');
  opt.alias('hot', 'hot');
  opt.describe('hot', '开启 hot-reload');
  opt.alias('v', 'verbose');
  opt.describe('v', '显示详细编译信息');
  opt.alias('m', 'middlewares');
  opt.describe('m', '加载项目中间件');
}

// console.log(23);
// createServer('/Users/pengzhen/Documents', argv.p);

export const run = (option) => {
  const cwd = sysPath.resolve('/Users/pengzhen/Documents');
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(serveStatic(cwd));
  app.use(serveIndex(cwd, { icons: true }));

  // 对js/css预处理
  app.use((req, res, next) => {
    const extName = sysPath.extname(req.url);
    extName === '.js' && res.setHeader('Content-Type', 'text/javascript; charset=UTF-8');
    extName === '.css' && res.setHeader('Content-Type', 'text/css; charset=UTF-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(extName);
    next();
  });

  app.listen(8000);
};
