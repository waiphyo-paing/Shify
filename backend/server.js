import express from "express";
import dotenv from "dotenv";

import pkg from "pg";
const { Pool } = pkg;

// Routes
import shiftRouters from "./routes/shift.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Postgres
export const pool = new Pool({
    user: process.env.POSTGRES_DB,
    host: 'postgres',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

// Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.error('Error connecting to MongoDBL:', err));

pool.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.error('Error connecting to PostgresSQL:', err);
    }else {
        console.log('PostgreSQL connected:', res.rows);
    }
});

// Mongodb test
const TestSchema = new mongoose.Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
});

export const TestModel = mongoose.model('Test', TestSchema);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running.');
});

app.get('/test', (req, res) => {
    // Postgres test
    pool.query('SELECT NOW()', (err, res) => {
        console.log(res.rows);
    });

    TestModel.create({ name: 'Test Data' }).then(doc => console.log(doc));

    console.log('test');
    res.send('Test route is running.');
});

app.use('/api', shiftRouters);

app.listen(PORT, () => {
    console.log(`Server is runngin on port ${PORT}`);
});