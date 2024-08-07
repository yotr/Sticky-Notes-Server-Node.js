const { db } = require('../../config/db');

const methods = {
    async getAllUsers(req, res, next) {
        try {

            let sql = "SELECT * FROM users"

            db.query(sql, (err, users) => {
                if (err) throw new Error(err)
                if (users) return res.status(200).send(users);
            })

        } catch (error) {
            return res.status(404).send({ error });
        }
    }
}

module.exports = { ...methods }