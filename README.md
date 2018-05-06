# poly-rpc-services

# pm2 自动部署测试

1. 将项目部署到服务器

pm2 deploy ecosystem.config.js production setup

2. 修改代码文件后, 将代码提交到git仓库, 将项目重新部署

pm2 deploy ecosystem.config.js production
或者
npm run deploy

注意: 
npm run的方式需要在package.json 中增加
```
"scripts": {
"deploy": "pm2 deploy ecosystem.config.js production"
}
```

