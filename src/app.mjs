import express from 'express';
import router from './router.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createTable } from './Controler/Pessoa.js'; // Importe a função createTable

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

// Chame a função createTable para garantir que a tabela seja criada
createTable();

// Servidor HTTP
app.listen(3000, () => console.log('Servidor HTTP rodando na porta 3000'));

// Servidor HTTPS
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key'),
}, app).listen(3001, () => console.log('Servidor HTTPS rodando na porta 3001'));
