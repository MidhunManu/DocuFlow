import express from 'express'
import logger from './logger.js';
const app = express();
app.get('/health-check', (req, res) => {
    res.send("healthy");
    logger.info("Logger endpoint accessed");
    res.end();
});

app.listen(3000);