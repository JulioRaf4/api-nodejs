// app.mjs
import express from 'express';
import router from './router.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(300, () => console.log('listening on'));
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key'),
}, app).listen(3001, () => console.log('Rodando em https'));
