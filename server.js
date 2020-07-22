const express = require("express");
const app = express();
const cors = require("cors");
require("./server/config/database");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/author-routes")(app);

app.listen(8000, () => console.log("Listening on port 8000"))