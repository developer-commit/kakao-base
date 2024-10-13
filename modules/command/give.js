var user_service = require("service/user_service");

module.exports = function give(){
    //Message를 call로 받아서 호출한다.

    var user_id = this.token[1];
    var point = parseInt(this.token[2]);
    if(!user_id || isNaN(point)) {
        this.replier.reply("/전송 user_id point");
    }

    var result = user_service.give.call(this, user_id, point);
    this.replier.reply(result);
};