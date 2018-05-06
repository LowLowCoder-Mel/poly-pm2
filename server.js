'use strict';

const grpc = require('grpc');
const PROTO_PATH = __dirname + '/protos/remote.proto';
const remote_proto = grpc.load(PROTO_PATH).remote;
const yk_rpc_services = require('./services/yankan');

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  let server = new grpc.Server();
  server.addService(remote_proto.YKRemoteService.service, { 
                      ActiveDevice: yk_rpc_services.ActiveDevice, 
                      ReActiveDevice: yk_rpc_services.ReActiveDevice,
                      GetOnline: yk_rpc_services.GetOnline, 
                      AddRemoteTask: yk_rpc_services.AddRemoteTask});

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("Rpc Server Listen On 50051");
}

main();
