const cardapio = require('./cardapio');
const lista = require('./lista');

function execute(user, msg, contato){

let menu = "Cardapio";

Object.keys(cardapio.menu).forEach((value) =>{
    let element = cardapio.menu[value];
    menu += `${value} - ${element.descricao}  `;
}

)
lista.liste[user].fase = 1;

    return  [`Estou aqui pra te ajudar rapidinho!💨 Me diga o que você precisa 👇
    
    1️⃣ Fazer um pedido    
    2️⃣ Falar com um atendente  
    
    ⚡ _Rápido Gás – Entrega rápida, atendimento nota 10._  
    ©️ _Todos os direitos reservados._ `]
};
exports.execute = execute;