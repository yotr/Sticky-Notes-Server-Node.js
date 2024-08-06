// const User = require('../../models/User');

const methods = {
    async getAllUsers(req, res, next) {
        try {
            return res.json([{ name: "test1", email: "test1@gmail.com", password: "test1" }, { name: "test2", email: "test2@gmail.com", password: "test2" }])
            // await User.find().then((users) => {
            //     if (!users) return res.status(404).send({ error: 'no users founded' });
            //     return res.status(201).send(users);

            // }).catch(error => {
            //     return res.status(404).send({ error: 'no users founded' });
            // })

        } catch (error) {
            return res.status(404).send({ error });
        }
    }
}

module.exports = { ...methods }