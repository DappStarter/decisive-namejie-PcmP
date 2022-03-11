require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember slow hope clip olympic ski'; 
let testAccounts = [
"0x64fe7bd878aeaa411ef528717df44d9a1223fbf081703bcaf3800e5a277bbe7c",
"0xd34976d97f679f8e5612d29d66da2e5c429626fe93a4c8796a853c1c8f43fc88",
"0xc70f996255b815104881b063639a002aa0fcfec94fb1fd0d2e78bb78a09fefab",
"0xea4ca4542339889e5c1bec4932ae8657de7abea4ef4fe5b2ced6d97569485530",
"0xd18043eb9995ccef26187504a9a5a8cf15da9f50e32f16d4e4f699096e517f82",
"0x8c34785030d738b02415a9d83fa284f45b54899a731cb3c7ab8531290c2476a0",
"0x4d0824c2bca858647e9510aba989941a583d5849f2a9806d869712e87fad24d1",
"0xf4e00d64da5ae281566b6bb487cdcaab0408ef7f90d2aeaf7c251042f8c31d2f",
"0x0f787ace387c6a542c03e8df29bc86ce353ac1cc9c09c4c7df90030462a1268a",
"0x221d79695628377e01eb080144644d56547561618937a26d5265e4c79a506088"
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

