var info = require("./info");
var dice = require("./dice");
var leaderboard = require('./leaderboard');
var reset_user = require("./reset_user");
var give = require("./give");

module.exports = (function(){
    //Message를 this로 가진상태에서 항상
    var Commands = {
        "/정보" : info,
        "/주사위" : dice,
        "/초기화" : reset_user,
        "/전송": give,
        "/순위" : leaderboard
    };

    Commands.exec_command = function(){
        
        if (Commands.hasOwnProperty(this.command_token)){
            Commands[this.command_token].call(this);
        }
    }

    return Commands;
})();
