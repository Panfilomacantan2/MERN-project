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
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// USER ROUTES
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

app.get('/', (req, res) => {
	res.send('This Api is made by: @panfilo27');
});

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

// POST ROUTES

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
