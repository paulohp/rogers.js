exports.openConn = function (credentials){
  return require('./lib')(credentials);
}
