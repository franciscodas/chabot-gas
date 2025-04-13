const cardapio = require('./cardapio');
const lista = require('./lista');

function execute(user, msg){
    if(msg === "2"){
        return["Em breve um de nossos atendente irá responder-lo", lista.liste[user].fase = 4]
    }
    if(!cardapio.menu[msg]){
        return [
            '❌ *OPÇÃO INVALIDA* ⚠️ ```APENAS UMA OPÇÃO POR VEZ``` '
        ]
    }   

    lista.liste[user].itens.push(cardapio.menu[msg]);

    lista.liste[user].fase = 3;

    lista.liste[user].fase = 2;
    

    return [`${cardapio.menu[msg].descricao}`];
    
};
exports.execute = execute;