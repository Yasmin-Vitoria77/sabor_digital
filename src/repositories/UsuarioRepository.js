const pool = require('../config/database')

class UsuarioRepository{
    async findByEmail(){
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        return rows[0];
    }

    async create(usuarioData){
        const { nome, email, senha, papel } = usuarioData;
        const [result] = await pool.query(
            'INSERT INTO usuario (nome, email, senha, papel) VALUES (?, ?, ?, ?)', [nome, email, senha, papel] 
        );
        return result.insertId;
    }
}


module.exports = new UsuarioRepository();