require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();



// Set up your private keys from environment variables
const SEPOLIA_TESTNET_PRIVATE_KEY = process.env.SEPOLIA_TESTNET_PRIVATE_KEY || '';
// const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = process.env.ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY || '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9", 
  networks: {
    hardhat: {
      chainId: 1337,
      // accounts: [
      //   {
      //     privateKey: '',
      //     balance: '', 
      //   },
      // ],
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts: [SEPOLIA_TESTNET_PRIVATE_KEY],
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      // accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY],
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 1337,
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
    },
  },
};