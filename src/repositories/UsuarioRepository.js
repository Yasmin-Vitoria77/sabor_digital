<<<<<<< HEAD
const pool = require('../config/database')

class UsuarioRepository{
    async findByEmail(){
=======
const pool = require('../config/database');

class UsuarioRepository {
    async create(usuarioData) {
        const { nome, email, senha, papel } = usuarioData;
        const [result] = await pool.query(
            'INSERT INTO usuario (nome, email, senha, papel) VALUES (?, ?, ?, ?)',
            [nome, email, senha, papel || 'cliente']
        );
        return result.insertId;
    }

    async findByEmail(email) {
>>>>>>> 23c4337758cdc70c6c29ea89f6c584458c42688c
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        return rows[0];
    }

<<<<<<< HEAD
    async create(usuarioData){
        const { nome, email, senha, papel } = usuarioData;
        const [result] = await pool.query(
            'INSERT INTO usuario (nome, email, senha, papel) VALUES (?, ?, ?, ?)', [nome, email, senha, papel] 
        );
        return result.insertId;
    }
}


module.exports = new UsuarioRepository();
=======
    async findById(id) {
        const [rows] = await pool.query('SELECT id, nome, email, papel, criado_em FROM usuario WHERE id = ?', [id]);
        return rows[0];
    }
}

module.exports = new UsuarioRepository();
>>>>>>> 23c4337758cdc70c6c29ea89f6c584458c42688c
