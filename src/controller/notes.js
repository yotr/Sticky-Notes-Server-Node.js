const { db } = require('../../config/db');

const methods = {
    async getAllNotes(req, res, next) {
        try {

            let sql = "SELECT * FROM notes"

            db.query(sql, (err, notes) => {
                if (err) return res.status(404).send({ error: err })
                if (notes) return res.status(200).send(notes);
            })

        } catch (error) {
            return res.status(404).send({ error });
        }
    },
    async createNote(req, res, next) {
        try {
            const { body, colors, position, userId } = req.body;


            let createNoteQuery = "INSERT INTO notes (body,colors,position,userId) VALUES (?, ?, ?,?)";

            db.query(createNoteQuery, [body, colors, position, userId], (err, result) => {
                if (err) return res.status(404).send({ error: err })
                if (result) return res.status(200).send({ message: 'note created successfully...', id: result.insertId });
            })



        } catch (error) {
            return res.status(500).send(error);
        }
    },

}

module.exports = { ...methods }