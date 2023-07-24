const cursoService = require('../services/cursoService')

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let cursos = await cursoService.buscarTodos();

        for(let i in cursos){
            json.result.push({
                codigo: cursos[i].codigo,
                descricao: cursos[i].nome
            });
        }

        res.json(json);
    },
}