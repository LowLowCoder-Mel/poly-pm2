'use strict';

const grpc = require('grpc');
const PROTO_PATH = __dirname + '/protos/remote.proto';
const remote_proto = grpc.load(PROTO_PATH).remote;

function main() {

  let client = new remote_proto.YKRemoteService('localhost:50051', grpc.credentials.createInsecure());
  // client.ActiveDevice({f: "5CCF7F34A37D", username: "15712908185", password: "12345678", accounttype: 1}, function(err, response){
  //     console.log(response);
  // })

  // client.GetOnline({f: "5CCF7F34A37D"}, function(err, response){
  //     console.log(response);
  // });

  // client.ReActiveDevice({f: "5CCF7F34A37D", username: "15712908185", password: "12345678", accounttype: 1}, function(err, response){
  //     console.log(response);
  // })

  client.AddRemoteTask({f: "5CCF7F34A37D", "zip": 1, "ir_device_type": 1, "rc_command_type": 1, "rc_command": "02zgvS8vxSkwUu2uwrwYfaLYpI3FFBcOTi9AFLQkDAKltaXWGKDvCD647LZ1wTE4G547Y+T3XqLZBoZyu4QIE+YAsPrNM31x4aNakck4pex5k="}, function(err, response){
      console.log(response);
  });
}

main();