const { db } = require('../../config/db');

const methods = {
    async getAllTitles(req, res, next) {
        try {

            let sql = "SELECT * FROM titles"

            await db.query(sql, (err, titles) => {
                if (err) return res.status(404).send({ error: err })
                if (titles) return res.status(200).send(titles);
            })

        } catch (error) {
            return res.status(404).send({ error });
        }
    },
    async getUserTitles(req, res, next) {
        try {
            const id = req.params.id;

            let getUserTitleQuery = "SELECT * FROM titles WHERE USERID = ?";

            await db.query(getUserTitleQuery, [id], (err, result) => {
                if (err) return res.status(404).send({ error: err })
                if (result) return res.status(200).send(result);
            })


        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async createTitle(req, res, next) {
        try {
            const { title, color, fontSize, position, userId } = req.body;

            let createTitleQuery = "INSERT INTO titles (title,color,fontSize,position,userId) VALUES (?, ?, ?,?,?)";

            await db.query(createTitleQuery, [title, color, fontSize, position, userId], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'title created successfully...', status: 200, id: result.insertId });
            })



        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async updateTitle(req, res, next) {
        try {
            const id = req.params.id;

            const { title, color, fontSize, position } = req.body;

            let updateTitleQuery = `UPDATE titles SET title = ?, color = ?, fontSize = ?,position = ? WHERE id = ${id}`;

            await db.query(updateTitleQuery, [title, color, fontSize, position], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'title updated successfully...', status: 200 });
            })


        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async updateTitleColor(req, res, next) {
        try {
            const id = req.params.id;

            const { color } = req.body;

            let updateTitleQuery = `UPDATE titles SET color = ? WHERE id = ${id}`;

            await db.query(updateTitleQuery, [color], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'title updated successfully...', status: 200 });
            })


        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async deleteTitle(req, res, next) {
        try {
            const id = req.params.id;

            let deleteTitleQuery = "DELETE FROM titles WHERE id = ?";

            await db.query(deleteTitleQuery, [id], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'title deleted successfully...', status: 200 });
            })



        } catch (error) {
            return res.status(500).send(error);
        }
    },

}

module.exports = { ...methods }