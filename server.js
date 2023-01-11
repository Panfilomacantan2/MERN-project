

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { initializedDB } = require('./DBConnection');
const app = express();

dotenv.config();
initializedDB();

const PORT = process.env.PORT || 3000;
// MIDDLEWARE
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// USER ROUTES
const userRoutes = require('./routes/user');
// POST ROUTES
const postRoutes = require('./routes/post');
// MESSAGE ROUTES
const messageRoutes = require('./routes/message');

// LOGIN ROUTES
const loginRoutes = require('./routes/auth');
app.use('/api/login', loginRoutes);

// LOGIN ROUTES
// const dashBoardRoutes = require('./routes/dashBoard');
// app.use('/api/dashboard', dashBoardRoutes);

app.get('/admin', (req, res) => {
	res.send('This Api is made by: @panfilo27');
});

// USER ROUTES
app.use('/api/user', userRoutes);
// POST ROUTES
app.use('/', postRoutes);
// MESSAGE ROUTES
app.use('/api/message', messageRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
