const grpc = require('grpc');
const path = require('path');
const fs   = require('fs');


module.exports = function(ip, port){
    this.ip = ip
    this.port = port
    this.services = {}
    this.funcitons = {}

    this.autoRun = function(protoDir){
        fs.readdir(protoDir, (err, files) => {
            if (err) {
                return console.log(err)
            }
            files.forEach(file => {
                const filePart = path.parse(file);
                const serviceName = filePart.name;
                const packageName = filePart.name;
                const extName = filePart.ext;
                const filePath = path.join(protoDir, file);

                if (extName == '.js'){
                    const funcitons = require(filePath)[serviceName];
                    console.log(funcitons)
                    this.funcitons[serviceName] = Object.assign({}, funcitons);
                    console.log(this.funcitons)
                } else if (extName == '.proto'){
                    this.services[serviceName] = grpc.load(filePath)[packageName][serviceName].service;
                }
            })

            return this.runServer();
        })
    }

    this.runServer = function(){
        const server = new grpc.Server();
        for (serviceName in this.services){
            const service = this.services[serviceName];
            // console.log(this.services)
            // console.log(this.funcitons)
            server.addService(service, this.funcitons[serviceName]);
        }

        // server.bind(`${this.ip}: ${this.port}`, grpc.ServerCredentials.createInsecure());
        // server.start();
    }
}