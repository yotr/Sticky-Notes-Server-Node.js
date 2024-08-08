const { db } = require('../../config/db');

const methods = {
    async getAllNotes(req, res, next) {
        try {

            let sql = "SELECT * FROM notes"

            await db.query(sql, (err, notes) => {
                if (err) return res.status(404).send({ error: err })
                if (notes) return res.status(200).send(notes);
            })

        } catch (error) {
            return res.status(404).send({ error });
        }
    },
    async getUserNotes(req, res, next) {
        try {
            const id = req.params.id;

            let getUserNoteQuery = "SELECT * FROM notes WHERE USERID = ?";

            await db.query(getUserNoteQuery, [id], (err, result) => {
                if (err) return res.status(404).send({ error: err })
                if (result) return res.status(200).send(result);
            })


        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async createNote(req, res, next) {
        try {
            const { body, colors, position, userId } = req.body;

            let createNoteQuery = "INSERT INTO notes (body,colors,position,userId) VALUES (?, ?, ?,?)";

            await db.query(createNoteQuery, [body, colors, position, userId], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'note created successfully...', status: 200, id: result.insertId });
            })



        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async updateNote(req, res, next) {
        try {
            const id = req.params.id;

            const { body, colors, position } = req.body;

            let updateNoteQuery = `UPDATE notes SET body = ?, colors = ?, position = ? WHERE id = ${id}`;

            await db.query(updateNoteQuery, [body, colors, position], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'note updated successfully...', status: 200 });
            })


        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async updateNoteColor(req, res, next) {
        try {
            const id = req.params.id;

            const { colors } = req.body;

            let updateNoteQuery = `UPDATE notes SET colors = ? WHERE id = ${id}`;

            await db.query(updateNoteQuery, [colors], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'note updated successfully...', status: 200 });
            })


        } catch (error) {
            return res.status(500).send(error);
        }
    },
    async deleteNote(req, res, next) {
        try {
            const id = req.params.id;

            let deleteNoteQuery = "DELETE FROM notes WHERE id = ?";

            await db.query(deleteNoteQuery, [id], (err, result) => {
                if (err) return res.status(404).send({ message: err, status: 404 })
                if (result) return res.status(200).send({ message: 'note deleted successfully...', status: 200 });
            })



        } catch (error) {
            return res.status(500).send(error);
        }
    },

}

module.exports = { ...methods }