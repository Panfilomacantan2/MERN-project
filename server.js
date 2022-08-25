import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializedDB } from './DBConnection.js';
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
import userRoutes from './routes/user.js';
// POST ROUTES
import postRoutes from './routes/post.js';
// MESSAGE ROUTES
import messageRoutes from './routes/message.js';

app.get('/', (req, res) => {
	res.send('This Api is made by: @panfilo27');
});

// USER ROUTES
app.use('/api/user', userRoutes);
// POST ROUTES
app.use('/api/post', postRoutes);
// MESSAGE ROUTES
app.use('/api/message', messageRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
