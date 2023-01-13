const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { initializedDB } = require('./DBConnection');
const rateLimit = require('express-rate-limit');

const app = express();

dotenv.config();
initializedDB();

// RATE LIMITER is to limit the request to our API
const requestLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minute
	max: 200,
});

app.use(requestLimiter);
app.set('trust proxy', 1);

const PORT = process.env.PORT || 3000;
// MIDDLEWARE
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))

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
app.use('/posts', postRoutes);
// MESSAGE ROUTES
app.use('/api/message', messageRoutes);


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
