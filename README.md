# Decentralized Cupcakes

This project demonstrates how to create a decentralized application (dApp) using Solidity smart contracts on the [Arbitrum](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction) network. 
## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deploying To Arbitrum](#deployment)
- [License](#license)


## Prerequisites
Ensure you have the following installed:

   * Metamask: A wallet to interact with the vending machine. 
   * NPM or Yarn: A package manager to install dependencies. 

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repo-name.git
   ```
2. Install dependencies:
   ```
   yarn install
   ```
3. Compile smart contracts:
   ```
   yarn hardhat compile
   ```
4. Run local Ethereum node::
   ```
   yarn hardhat node
   ```
5. Deploy the smart contract locally:
   ```
   yarn hardhat run scripts/deploy.js --network localhost
   ```

## Usage
Once the contract is deployed, you can interact with it using the following steps:

1. Connect Metamask to your local network:

   * Open Metamask and select the "Localhost 8545" network.

2. Interact with the Vending Machine:

   * Use the Metamask wallet address and contract address displayed during deployment to interact with the vending machine.
## Deploying To Arbitrum
To deploy the smart contract to the Arbitrum Sepolia testnet:
1. Update your Hardhat config:

   * Replace the private key in hardhat.config.js with your Sepolia testnet private key.

2. Obtain Arbitrum Sepolia ETH (ASPL):

   * Use a Sepolia faucet to obtain testnet ETH and bridge it to Arbitrum Sepolia.

3. Deploy to Arbitrum Sepolia:
 ```
   yarn hardhat run scripts/deploy.js --network arbitrumSepolia
   ```
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
The original [Cupcake Vending Machine tutorial](https://docs.arbitrum.io/build-decentralized-apps/quickstart-solidity-hardhat) from Arbitrum.
