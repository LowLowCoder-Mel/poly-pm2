const grpc = require('grpc')

const PROTO_PATH = __dirname + './protos/test.proto'
const testProto = grpc.load(PROTO_PATH).testPackage

function test(call, callback) {
  callback(null, {message: 'Pong'})
}

const server = new grpc.Server();
server.addProtoService(testProto.testService.service, {test: ping})
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()