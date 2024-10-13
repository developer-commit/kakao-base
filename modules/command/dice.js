var user_service = require("service/user_service");

module.exports = function dice(){
    //Message를 call로 받아서 호출한다.
    var result = user_service.dice.call(this);
    this.replier.reply(result);
};