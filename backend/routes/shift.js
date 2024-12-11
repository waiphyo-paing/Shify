import express from "express";
import { pool, TestModel } from "../server.js";
const router = express.Router();

router.get('/shifts', async (req, res) => {
    // res.json({message: 'List of shifts will go here.'});
    console.log('this is shifts route');
    try{
        const result = await pool.query('SELECT * FROM shifts');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/messages', async (req, res) => {
    try{
        const message = await TestModel.create(req.body);
        res.json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default router;