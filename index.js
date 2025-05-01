require("dotenv/config"); //to access your env vars globally
const express = require("express");
const app = express();

//middleware
app.use(express.json()); //to parse the json format data from frontend

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

app.get("/", (req, res) => res.json("API is running"));
