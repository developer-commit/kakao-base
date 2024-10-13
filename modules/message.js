//사용자가 호출하는 메세지를 정리함

module.exports = (function(){
    function Message(params){

        this.replier = params.replier;
        this.token = params.msg.split(" ")
        this.user_id = params.user;
        this.name = params.sender;

        this.command_token = this.token.slice(0, 1)[0];
        this.is_command = this.command_token && this.command_token.startsWith("/");

        //이외의 전처리는 나중에 생각하자

        return this
    }

    return Message
})();