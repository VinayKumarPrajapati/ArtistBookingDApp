const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const morgan = require("morgan");
const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
const artist = require('./routes/api/artist')
import { readdirSync } from "fs";

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect with MongoDB
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected Successfully"))
	.catch((err) => console.log("DB Connection Error: ", err));

// Middleware
app.use(cors());
app.use(passport.initialize());
app.use(morgan("dev"));
// Config
require("./config/passport")(passport);

//Middleware
app.use("/api/user", user);
app.use("/api/artist", artist);
app.use("/api/profile", profile);

// Autorouting middleware
// readdirSync("./routes/api").map((r) =>
// 	app.use("/api", require(`./routes/api/${r}`))
// 	console.log(`${r}`)
// );

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
