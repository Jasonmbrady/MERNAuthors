const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authors-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Commected to database"))
    .catch(err => console.log("Unable to connect to the database", err));

require("../models/Author");