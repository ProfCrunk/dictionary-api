const mongoose = require('mongoose');

const dictionarySchema = new mongoose.Schema({
    word: {
        type: String,
        index: true,
    },
    definition
})