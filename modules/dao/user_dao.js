module.exports = (function () {

    function createUser (uid, name, point, chat) {
        if (this.Database.user[uid]) {
            throw new Error("User already exists.");
        }
        this.Database.user[uid] = {
            uid: uid,
            name: name,
            point: point,
            chat: chat
        };
        return this.Database.user[uid];
    };

    function get (uid) {


        if (this.Database.user.hasOwnProperty(uid)) {
            return this.Database.user[uid];
        }
        return null;
    };

    function update (uid, data) {
        if (!this.Database.user[uid]) {
            throw new Error("User not found.");
        }

        var user = this.Database.user[uid];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                user[key] = data[key];
            }
        }
        return user;
    };

    function _delete(uid) {
        if (!this.Database.user[uid]) {
            throw new Error("User not found.");
        }
        delete this.Database.user[uid];
        return true;
    };

    return {
        createUser : createUser,
        update : update,
        get : get,
        _delete : _delete
    }
})();