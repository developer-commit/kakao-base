var DTO = require("dto/dto");

module.exports = (function(){
    //원래는 sqlite를 사용해야 하지만 귀찮은 관계로 pass
    function DAO(){
        this.Database = {
            user : {
            }
        }
        return this
    }

    return DAO
})();