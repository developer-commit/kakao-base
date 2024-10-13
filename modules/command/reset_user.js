var user_service = require("service/user_service");

module.exports = function reset_user(){
    //Message를 call로 받아서 호출한다.]

    var user_id = this.token[1];
    if(!this.token[1]) {
        this.replier.reply("/초기화 user_id");
        return
    }

    var result = user_service.resetUser.call(this, user_id);
    this.replier.reply(result);
};