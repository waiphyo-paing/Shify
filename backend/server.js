import express from "express";
import dotenv from "dotenv";

// Routes
import shiftRouters from "./routes/shift.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running.');
});

app.use('/api', shiftRouters);

app.listen(PORT, () => {
    console.log(`Server is runngin on port ${PORT}`);
});