const express = require('express');
const app = express();

// Settings
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
});
