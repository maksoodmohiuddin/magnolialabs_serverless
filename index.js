var moment = require('moment'); 
//console.log(moment().format().toString()); 
exports.handler = (event, context, callback) => {
    var currentTime = moment().format(); 
    callback(null, {
        statusCode: '200',
        body: 'Current time is: ' + currentTime.toString(),
    });
};
