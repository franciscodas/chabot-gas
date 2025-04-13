const sabor = require('./2');
const bairro = require('./bairro');
const lista = require('./lista');

function execute(user, msg){

    if(msg === '0'){
        return [ "📍 Agora, informe o *ENDEREÇO*.       (```Rua, Número, Bairro, Hora```) \n\n-------------------------------------------------", lista.liste[user].fase = 5];
    }
    if(msg === '#'){
        return [`Estou aqui pra te ajudar rapidinho!💨 Me diga o que você precisa 👇
        
        1️⃣ Fazer um pedido   
        2️⃣ Falar com um atendente  
        
        ⚡ _Rápido Gás – Entrega rápida, atendimento nota 10._  
        ©️ _Todos os direitos reservados._ `, lista.liste[user].fase = 0]
        
    }

lista.liste[user].itens.push(bairro.br[msg]);
lista.liste[user].itens.push(sabor.sb[msg]);
return [ `${sabor.sb[msg].descricao}
    ${bairro.br[msg].descrica}
✅ *Adicionado Com Sucesso* 
0️⃣ - Finalizar pedido
#️⃣ - Voltar ao Menu
`];
}
exports.execute = execute;