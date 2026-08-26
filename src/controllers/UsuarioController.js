<<<<<<< HEAD
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
=======
const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    async registrar(req, res) {
        try {
            const resultado = await UsuarioService.registrarUsuario(req.body);
            res.status(201).json(resultado);
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro.stack || erro
>>>>>>> 23c4337758cdc70c6c29ea89f6c584458c42688c
            });
        }
    }

<<<<<<< HEAD
    async login(req, res){
        try{
            const dados = await UsuarioService.
        }
    }
}
=======
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const resultado = await UsuarioService.login(email, senha);
            res.status(200).json(resultado);
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro.stack || erro
            });
        }
    }
}

module.exports = new UsuarioController();
>>>>>>> 23c4337758cdc70c6c29ea89f6c584458c42688c
