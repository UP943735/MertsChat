const moment = require('moment');

//Formats the message sent out by the server
function formatMessage(username, text){
    return{
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;