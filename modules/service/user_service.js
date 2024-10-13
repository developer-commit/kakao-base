var DAO = require("dao/dao");
var userDAO = require("dao/user_dao");

module.exports = (function () {
    var dao = DAO();

    function chat() {
        if (this.is_command) return;

        var event_msg = [];
        var user = userDAO.get.call(dao, this.user_id);

        if (!user) {
            userDAO.createUser.call(dao, this.user_id, this.name, 0, 0);
            user = userDAO.get.call(dao, this.user_id);
        }

        user.chat += 1;
        user.point += 1;

        // 랜덤 확률로 포인트 이벤트 발생 (10% 확률)
        if (Math.random() < 0.5) {
            var bonus = Math.floor(Math.random() * 10) + 1; // 1~10 포인트
            user.point += bonus;
            event_msg.push(bonus + " 포인트 보너스를 받았습니다!");
        }

        userDAO.update.call(dao, this.user_id, user);
        return event_msg;
    }

    function view() {
        var user = userDAO.get.call(dao, this.user_id);
        if (!user) return "사용자를 찾을 수 없습니다.";

        return (
            "ID: " + user.uid +
            ", 이름: " + user.name +
            ", 포인트: " + user.point +
            ", 채팅 횟수: " + user.chat
        );
    }

    function give(target_user_id, amount) {
        var user = userDAO.get.call(dao, this.user_id);
        var targetUser = userDAO.get.call(dao, target_user_id);

        if (!user || !targetUser) return "유저를 찾을 수 없습니다.";
        if (user.point < amount) return "포인트가 부족합니다.";

        user.point -= amount;
        targetUser.point += amount;

        userDAO.update.call(dao, this.user_id, user);
        userDAO.update.call(dao, target_user_id, targetUser);

        return targetUser.name + "에게 " + amount + " 포인트를 지급했습니다.";
    }

    function dice() {
        var user = userDAO.get.call(dao, this.user_id);
        if (!user || user.point <= 0) return "포인트가 부족하여 주사위를 사용할 수 없습니다.";

        var roll = Math.floor(Math.random() * 6) + 1; // 1~6 사이의 주사위 값
        user.point += roll - 3; // -2 ~ +3 포인트 변화

        userDAO.update.call(dao, this.user_id, user);

        return "🎲 주사위 결과: " + roll + ". 포인트가 " + (roll - 3) + "만큼 변경되었습니다.";
    }

    function leaderboard() {
        var users = [];
        for (var uid in dao.Database.user) {
            if (dao.Database.user.hasOwnProperty(uid)) {
                users.push(dao.Database.user[uid]);
            }
        }

        users.sort(function (a, b) {
            return b.point - a.point; // 포인트 내림차순 정렬
        });

        var result = [];
        for (var i = 0; i < Math.min(5, users.length); i++) {
            result.push((i + 1) + ". " + users[i].name + " - " + users[i].point + " 포인트");
        }

        return result.join('\n');
    }

    function resetUser(uid) {
        var user = userDAO.get.call(dao, uid);
        if (!user) return "해당 사용자를 찾을 수 없습니다.";

        user.chat = 0;
        user.point = 0;

        userDAO.update.call(dao, uid, user);
        return user.name + "의 정보를 초기화했습니다.";
    }

    function test(){
        return "test"
    }

    return {
        test : test,
        chat: chat,
        view: view,
        give: give,
        dice: dice,
        leaderboard: leaderboard,
        resetUser: resetUser
    };
})();