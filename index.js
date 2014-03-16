function openConn(credentials){
  return require('./lib')(credentials);
}

module.exports = openConn;