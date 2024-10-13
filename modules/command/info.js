var user_service = require("service/user_service");

module.exports = function info(){
    //Message를 call로 받아서 호출한다.
    var result = user_service.view.call(this);
    this.replier.reply(result);
};