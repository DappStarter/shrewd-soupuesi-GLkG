require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rifle saddle puppy install clog surge gather'; 
let testAccounts = [
"0x08cd7bb213fd463e27c60e9c6f5e98bb51ff688d73286359b6c69a499bae315b",
"0x929f1a1ea8292e893170a65b08bb40e7c3b199e9c9c4ccdce6932105fb158bc5",
"0xa028273bf14f06113f9825b4a3401685ea83f8f67b017c84ef17e27cc82f2270",
"0x1d1ce9a86714c537147114ef1712b2965c96a2a924b5b0f397f34f62894dcb27",
"0x1f0bcfa5f773581c8ac446f8a6e50edc65b6431aabdd74aeb211377bbf89ee8b",
"0x01b4364d8f2c8883e3af8acb500515cf5335cdf0cc0871cb3501cb0c4453a92b",
"0x8ed5f510a053a9b007499405190517f68ef0ad974ccc33912fc900cf52219be4",
"0x3a6a1d864cd33569e6fc57cf26446b810d1beeb0da9ff7976221f1b8f8d926f1",
"0x21ed3a98a6d4e86d8dc8d49b7e917b0fab3bef335edc5435d47b5b2d7966433d",
"0x1f4feadd8553cfb27ec26d8fb7ccc2a6bf684201189bfadc23d0e5ee3e533c18"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

