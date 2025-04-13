const sabor = require('./2');
const lista = require('./lista');
const bairro = require('./bairro');
const cardapio = require('./cardapio')

function execute(user, msg){

    if(!bairro.br[msg]){
        return [
            `     ❌ *OPÇÃO INVALIDA* ❌
        ⚠️ _APENAS UMA OPÇÃO POR VEZ_ `
        ]
    }

    lista.liste[user].itens.push(bairro.br[msg]);

    lista.liste[user].fase = 2;

    
    return[ `${bairro.br[msg].descricao} `]
};
exports.execute = execute;