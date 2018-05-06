// exports.testService = function(call, callback){
//     callback(null, {message: 'Pong'})
// };

exports.testService = function ping(call, callback) {
    callback(null, {message: 'Pong'})
}