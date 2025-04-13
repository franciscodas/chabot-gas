const sabor = require('./2');
const lista = require('./lista');

function execute(user, msg) {
  lista.liste[user].endereco = msg;
  const produto = lista.liste[user].itens[lista.liste[user].itens.length - 1];

  // Fase pode ser alterada aqui, se necessário:
  lista.liste[user].fase = 4;

  return {
    texto: `📦 *Resumo do seu pedido:*  

🏠 _${lista.liste[user].endereco}_  
🛢️ ${produto.descricao}  
🕒 _Entrega em 8 a 20 minutos_

✅ *Pedido confirmado com sucesso!*

🙏 Agradecemos sua preferência.

🛵 Seu pedido já está a caminho com nosso entregador!`,
    imagem: './rapido.jpeg' // <-- imagem local do projeto
  };
}

exports.execute = execute;