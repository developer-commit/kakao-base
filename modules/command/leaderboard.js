var user_service = require("service/user_service");

module.exports = function leaderboard(){
    //Message를 call로 받아서 호출한다.
    var result = user_service.leaderboard.call(this);
    this.replier.reply(result);
};