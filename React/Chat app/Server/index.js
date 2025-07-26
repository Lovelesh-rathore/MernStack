import express from 'express';
import connectDB from './src/config/db.js';
await connectDB();
import cloudinary from './src/config/cloudinary.js';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: " Server connected " });
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await cloudinary.api.resources({ max_results: 1 });
        console.log("Cloudinary connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
});