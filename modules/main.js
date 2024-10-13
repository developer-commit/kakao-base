var Message = require("message");
var Commands = require("command/command");
var user_service = require("service/user_service")

require("Polyfill")

//params: room, msg, sender, isGroupChat, replier, imageDB, packageName, user 
function main(params) {
   //command_handler
   var message = new Message(params);
   Commands.exec_command.call(message);
   
   var event_message = user_service.chat.call(message);

   if (event_message) {
      params.replier.reply(event_message.join("/n"))
   }
}

module.exports = (main)