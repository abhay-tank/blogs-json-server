const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

// Check if its production server or development server
// If development server -> use configuration from config.env
if (!process.env.NODE_ENV || !process.env.NODE_ENV == "production") {
	dotenv.config({ path: path.join(__dirname, "config.env") });
}
const { config } = require("./src/configuration/config");
const blogsRouter = require("./src/routes/blogsRouter");

const app = express();

app.use(express.json());
app.use("/blogs", blogsRouter);
app.use("**", (req, res) => {
	res.status(404).send("Invalid route");
});

app.listen(config.PORT, () => {
	console.log(`Server started on PORT:${config.PORT}`);
});
