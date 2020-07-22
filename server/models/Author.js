const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Author names must be at least 3 characters long."]
    }
}, { timestamps: true });

mongoose.model("Author", AuthorSchema);