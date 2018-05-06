const RpcServer = require('./rpcServer');
const path = require('path');

const rpcServer = new RpcServer('0.0.0.0', 50051)
rpcServer.autoRun(path.join(__dirname, './rpc_protos/'))