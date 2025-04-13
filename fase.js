var fase = {
  0: {
    description: 'welcome',
    obj: require('./0'),
  },
  1:{
    description: 'opcao',
    obj: require('./1')
  },
  2:{
    description: 'cardapios',
    obj: require('./ativa')
  },
  3:{
    description: 'taxa',
    obj: require('./3')
  },
  4:{
    description: 'finalizar',
    obj: require('./4')
  },
  5:{
    description: 'finalizar',
    obj: require('./5')
  },
  6:{
    description: 'finalizar',
    obj: require('./6')
  },
  7:{
    description: 'pagamento',
    obj: require('./7')
  }
}
exports.fse = fase;  

