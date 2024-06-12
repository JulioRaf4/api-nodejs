import { openDb } from '../configDB.js';

export async function createTable() {
    try {
        const db = await openDb();
        await db.exec('CREATE TABLE IF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
    } catch (error) {
        console.error('Error creating table:', error.message);
    }
}

export async function selectPessoas(req, res) {
    try {
        const db = await openDb();
        const pessoas = await db.all('SELECT * FROM Pessoa');
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function selectPessoa(req, res) {
    let id = req.params.id;
    try {
        const db = await openDb();
        const pessoa = await db.get('SELECT * FROM Pessoa WHERE id=?', [id]);
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function insertPessoa(req, res) {
    let pessoa = req.body;
    try {
        const db = await openDb();
        await db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
        res.json({ "statusCode": 200 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updatePessoa(req, res) {
    let pessoa = req.body;
    try {
        const db = await openDb();
        await db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
        res.json({ "statusCode": 200 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deletePessoa(req, res) {
    let id = req.params.id;
    try {
        const db = await openDb();
        await db.run('DELETE FROM Pessoa WHERE id=?', [id]);
        res.json({ "statusCode": 200 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
