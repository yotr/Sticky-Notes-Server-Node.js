const { db } = require('../../config/db');
const bcrypt = require('bcrypt'); //to hash password

const methods = {
    async getAllUsers(req, res, next) {
        try {

            let sql = "SELECT * FROM users"

            await db.query(sql, (err, users) => {
                if (err) throw new Error(err)
                if (users) return res.status(200).send(users);
            })

        } catch (error) {
            return res.status(404).send({ error });
        }
    },
    async register(req, res, next) {
        try {
            const { name, email, password } = req.body;

            //check if email exist or not 
            let usersQuery = `SELECT * FROM users WHERE email = ?`;
            await db.query(usersQuery, [email], (err, user) => {
                if (err) return res.status(404).send({ error: err })
                if (user) {
                    if (user?.length > 0) return res.status(404).send({ message: 'please enter unique email address.', status: 404 });
                    // add new user
                    if (password) {
                        let createUserQuery = "INSERT INTO users (name,email,password) VALUES (?, ?, ?)";
                        db.query(createUserQuery, [name, email, password], (err, result) => {
                            if (err) return res.status(404).send({ error: err })
                            if (result) return res.status(200).send({ message: 'user created successfully...', status: 200, id: result.insertId });
                        })
                    }
                    else {
                        return res.status(500).send({ error: "Check Your Data First And Try Again" })
                    }
                }

            })

        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log(email);
            //check if email exist or not 
            let userQuery = `SELECT * FROM users WHERE email = ? limit 1`;

            await db.query(userQuery, [email], (err, user) => {
                if (err) return res.status(404).send({ error: err })
                if (user) {
                    if (user?.length == 0) return res.status(404).send({ message: 'this user doesnt exist', status: 404 });
                    // check password
                    if (user[0]?.password === password) {
                        res.status(200).send({
                            message: "logged in successfully",
                            status: 200,
                            user: {
                                id: user[0]?.id,
                                name: user[0]?.name,
                                email: user[0]?.email,
                            }
                        })
                    } else {
                        return res.status(404).send({ message: "incorrect email or password", status: 404 });
                    }
                }
            })

        } catch (error) {
            return res.status(500).send({ error });
        }
    },
}

module.exports = { ...methods }