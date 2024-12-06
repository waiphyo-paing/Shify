import express from "express";
const router = express.Router();

router.get('/shifts', (req, res) => {
    res.json({message: 'List of shifts will go here.'});
});

export default router;