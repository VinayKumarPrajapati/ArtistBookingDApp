const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
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
app.use(passport.initialize());

// Config
require("./config/passport")(passport);

//Middleware
app.use("/api/user", user);
// app.use("/api/artist", artist);
app.use("/api/profile", profile);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
