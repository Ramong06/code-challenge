require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes");

const CONNECTION_URL = "mongodb+srv://ramon5406:Achilles54@businesses.ri0rv.mongodb.net/businesses?retryWrites=true&w=majority" || "mongodb://localhost/businesses";

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(secure);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(CONNECTION_URL, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.use(apiRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});