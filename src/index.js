//require("dotenv").config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");

const morgan = require("morgan");

//const mongoose = require("mongoose");

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser);
app.use(morgan("dev"));

//mongoose.connect(process.env.MONGO_URI, {
//	useNewUrlParser: true,
//	useUnifiedTopology: true,
//});

app.get("/", (req, res) => {
    res.send("Hello");
});



app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});