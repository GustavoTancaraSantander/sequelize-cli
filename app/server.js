const express = require('express');
const app = express();

// Settings
const { connection } = require('../db/connection');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
	res.json({
		nodemon: 'Welcome Server Express!',
	});
});

// Run Server
app.listen(PORT, () => {
	console.log(`Start Server in PORT ${PORT}`);
	connection
		.sync({ force: true })
		.then(() => {
			console.log('Se ha establecido la connection DB con Sequelize !!!');
		})
		.catch((error) => {
			console.error(error);
		});
});
