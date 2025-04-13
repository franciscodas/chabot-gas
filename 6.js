const lista = require('./lista');

function execute(user, msg){
    
    if(msg == '*'){
        return [` *Pedido Gerado com Sucesso!*
         _Agradecemos Sua 
         Preferencia!_
         Seu Pedido Está *A Caminho* `, lista.liste[user].fase = 4]
     }
}
exports.execute = execute;