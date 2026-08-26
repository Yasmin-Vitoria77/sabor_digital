const UsuarioController = require ('../services/UsuarioService')

class UsuarioController{
    async registrar(req, res){
        try{
            const token = await UsuarioService.registrarUsuario(req.body);
            res.status(201).json(token);

        } catch(erro){
            res.status(error.status || 500).json({
                sucesso: false,
                mensagem: erro.message || 'Erro ao cadastrar usuário',
                error: erro.stack || erro
            });
        }
    }

    async login(req, res){
        try{
            const dados = await UsuarioService.
        }
    }
}