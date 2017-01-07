const StellarSdk = require('stellar-sdk');
module.exports = {
  issuer: 'GBAMBOOZDWZPVV52RCLJQYMQNXOBLOXWNQAY2IF2FREV2WL46DBCH3BE',

  // holder of USD; buyer of XLM
  // GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  buyer: StellarSdk.Keypair.fromSeed('SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),

  // holder of XLM; seller of XLM
  // GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  seller: StellarSdk.Keypair.fromSeed('SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
};