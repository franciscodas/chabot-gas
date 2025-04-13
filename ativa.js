const sabor = require('./2');
const lista = require('./lista');

function execute(user, msg){
   
    if(msg === '0'){
        return [ `    💳*Forma de pagamento*
        1️⃣ Dinheiro R$130
        2️⃣ debito R$130
        3️⃣ pix R$130
        4️⃣ R$135 no crédito em Até 2x
        -------------------------
         `, lista.liste[user].fase = 7];
    }
    if(msg === '2'){
        return [`Estou aqui pra te ajudar rapidinho!💨 Me diga o que você precisa 👇
    
        1️⃣ Fazer um pedido    
        2️⃣ Falar com um atendente  
        
        ⚡ _Rápido Gás – Entrega rápida, atendimento nota 10._  
        ©️ _Todos os direitos reservados._ `, lista.liste[user].fase = 1]
        
    }
    if(msg === '#'){
        return [`Estou aqui pra te ajudar rapidinho!💨 Me diga o que você precisa 👇
    
        1️⃣ Fazer um pedido    
        2️⃣ Falar com um atendente  
        
        ⚡ _Rápido Gás – Entrega rápida, atendimento nota 10._  
        ©️ _Todos os direitos reservados._ `, lista.liste[user].fase = 1]
        
    }

    if(msg === '3'){
        return [ " 3️⃣ Consultar valores", lista.liste[user].fase = 2];
    }

    if(!sabor.sb[msg]){
        return [
            `     ❌ *OPÇÃO INVALIDA* ❌
        ⚠️ _APENAS UMA OPÇÃO POR VEZ_ `
        ]
    }

    lista.liste[user].itens.push(sabor.sb[msg]);

    return [ `${sabor.sb[msg].descricao} 
    ✅ *Adicionado Com Sucesso* 
    0️⃣ - Forma de pagamento
    #️⃣ - Voltar ao Menu
   `];
};
exports.execute = execute;

// `${sabor.sb[msg].descricao} 
// ✅ *Adicionado Com Sucesso* 
// _Porfavor! Digite Agora a Quantidade_
// *️⃣-10
// #️⃣-20
// 0️⃣-FINALIZAR COMPRA`


// return[`🗒️ *RESUMO DO PEDIDO:* 
// 🧁Sabores:  *pastel de carne* 🥩
// 🚚 Taxa de entrega: *a confirmar*. 
// 📍Endereço: *R: Alberto santis, N°34* 
// 💰Valor dos pasteis: *R$20,00*. 
// ⏳Tempo de entrega: *4 hora*.  
//     🔊 _Valor referente as 10 unidade_`] 

// _Agora Digite Seu Endereço_
// _____________________________