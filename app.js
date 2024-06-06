const express = require("express");
const { error } = require("console");
const getRoutes = require("./routes/getRoutes");
const postRoutes = require("./routes/postRoutes");
const putRoutes = require("./routes/putRoutes");
const patchRoutes = require("./routes/patchRoutes");
const deleteRoutes = require("./routes/deleteRoutes");

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", getRoutes);
app.use("/", postRoutes);
app.use("/", putRoutes);
app.use("/", patchRoutes);
app.use("/", deleteRoutes);

app.use((err, req, res, next) => {
	error(err.stack);
	res.status(500).send("Aconteceu um problema no servidor");
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
