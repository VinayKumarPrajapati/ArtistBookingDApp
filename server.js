const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Route Imports
const user = require("./routes/api/user");
const artist = require("./routes/api/profile");
const post = require("./routes/api/post");
const profile = require("./routes/api/profile");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB config
const db = require("./config/key").mongoURI;

// Connect with MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Atlas Connected"))
	.catch((err) => console.log(err));

// Middleware
app.use(passport.initialize());

// Config
require("./config/passport")(passport);

//Middleware
app.use("/api/user", user);
app.use("/api/artist", artist);
app.use("/api/post", post);
app.use("/api/profile", profile);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
