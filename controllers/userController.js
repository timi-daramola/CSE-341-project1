const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const db = mongodb.getDatabase();
        console.log('Using database:', db);
        const result = await db.collection('contacts').find();
        result.toArray().then((contacts) => {
            console.log('Fetched contacts:', contacts);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        });
    } catch (err) {
        console.error('Error fetching contacts:', err);
        res.status(500).json({ error: 'An error occurred while fetching contacts' });
    }
};

const getSingle = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const db = mongodb.getDatabase();
        console.log('Using database:', db.databaseName);
        const result = await db.collection('contacts').find({ _id: contactId });
        result.toArray().then((contacts) => {
            console.log('Fetched contact:', contacts);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        });
    } catch (err) {
        console.error('Error fetching contact:', err);
        res.status(500).json({ error: 'An error occurred while fetching the contact' });
    }
};

module.exports = {
    getAll,
    getSingle
};