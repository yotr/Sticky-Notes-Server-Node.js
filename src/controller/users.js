const { db } = require('../../config/db');
const bcrypt = require('bcrypt'); //to hash password

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
    },
    async register(req, res, next) {
        try {
            const { name, email, password } = req.body;

            //check if email exist or not 
            let usersQuery = `SELECT * FROM users WHERE email = ?`;
            await db.query(usersQuery, [email], (err, user) => {
                if (err) return res.status(404).send({ error: err })
                if (user) {
                    if (user?.length > 0) return res.status(404).send({ message: 'please enter unique email address.' });
                    // add new user
                    if (password) {
                        // bcrypt.hash(password, 10).then((hashedPassword) => {
                        let createUserQuery = "INSERT INTO users (name,email,password) VALUES (?, ?, ?)";
                        // console.log(hashedPassword);
                        db.query(createUserQuery, [name, email, password], (err, result) => {
                            if (err) return res.status(404).send({ error: err })
                            if (result) return res.status(200).send({ message: 'user created successfully...', id: result.insertId });
                        })
                        // }).catch((error) => {
                        //     return res.status(500).send({ error })
                        // })
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
            //check if email exist or not 
            let userQuery = `SELECT * FROM users WHERE email = ? limit 1`;

            await db.query(userQuery, [email], (err, user) => {
                if (err) return res.status(404).send({ error: err })
                if (user) {
                    if (user?.length == 0) return res.status(404).send({ message: 'this user doesnt exist' });
                    // check password
                    if (user[0]?.password === password) {
                        res.status(200).send({
                            message: "logged in successfully",
                            user: {
                                name: user[0]?.name,
                                email: user[0]?.email,
                            }
                        })
                    } else {
                        return res.status(404).send({ message: "incorrect password", user: user[0] })
                    }
                    // bcrypt.compare(password, user[0]?.password).then((checked) => {
                    //     if (checked === false) { return res.status(404).send({ message: "incorrect password", user: user[0] }) }
                    //     //create jwt token
                    //     // const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
                    //     res.status(200).send({
                    //         message: "logged in successfully",
                    //         user: {
                    //             name: user[0]?.name,
                    //             email: user[0]?.email,
                    //         }
                    //     })
                    // }).catch(error => {
                    //     return res.status(404).send({ error: "somthing wrong try again" });
                    // })
                }
            })

        } catch (error) {
            return res.status(500).send({ error });
        }
    },
}

module.exports = { ...methods }