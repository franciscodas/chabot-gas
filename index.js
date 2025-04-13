const venom = require('venom-bot');
const lista = require('./lista');
const fase = require('./fase');

const timeouts = {};

// Variável para saber se o bot está em produção
const isProduction = process.env.NODE_ENV === 'production';

// Configuração do Venom-Bot
venom
  .create({
    session: 'session-name',
    folderNameToken: "tokens",
    devtools: !isProduction,  // Desativa ferramentas de desenvolvimento em produção
    headless: isProduction,   // Modo headless em produção (sem interface gráfica)
    useChrome: true,
    timeout: 10000,
    puppeteerOptions: {
      args: ['--no-sandbox'], // Necessário para rodar em servidores
    },
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log('Erro ao iniciar o Venom:', erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    resetTimeout(client, message.from);

    const faseAtual = faze(message.from);
    const resposta = fase.fse[faseAtual].obj.execute(
      message.from,
      message.body,
      message.sender.name
    );

    if (Array.isArray(resposta)) {
      for (const msg of resposta) {
        await client.sendText(message.from, msg);
      }
    } else if (resposta && resposta.texto && resposta.imagem) {
      await client.sendImage(
        message.from,
        resposta.imagem,
        'imagem.png',
        resposta.texto
      );
    }
  });
}

function faze(user) {
  if (!lista.liste[user]) {
    lista.liste[user] = {
      fase: 0,
      itens: [],
    };
  }
  return lista.liste[user].fase;
}

function resetTimeout(client, user) {
  if (timeouts[user]) clearTimeout(timeouts[user]);

  timeouts[user] = setTimeout(() => {
    lista.liste[user].fase = 0;
    client.sendText(user, 'Sessão reiniciada por inatividade. Vamos começar de novo 😊');
    delete timeouts[user];
  }, 2 * 60 * 1000); // 2 minutos
}

console.log("🤖 Bot iniciado com sucesso!");
