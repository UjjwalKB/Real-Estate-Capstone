# Real-Estate-Capstone
This is a sample decentralized application for Real Estate marketplace wherein user can transfer the title and the ownership of properties(real estate) can be tracked effectively. This project uses OpenSea to list the property token for sale.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Please make sure you've already installed 
  Tools and  used version
*   node (v10.16.0)
*   npm  (6.0.0)
*   Ganache CLI v6.4.4
*   Truffle (v5.0.10)
*   Solidity - 0.5.0 (solc-js)
*   MetaMask extension for chrome browser
*   Web3.js v1.0.0-beta.37

## Installing
Please follow the following steps to get the environment up and running.

#### Create a local working directory and then  clone github repository:
Clone the github repository
Install the required node packages as listed in 'package.json'
```
npm install
```

#### Open a terminal window and Launch Ganache-cli:
```
ganache-cli -p 8545 -m "spirit supply whale amount human item harsh scare congress discover talent hamster" --gasLimit 300000000 --gasPrice 20000000000 -a 20

```
#### Open a separate terminal window and change the directory to eth-contracts
Change to the folder ```eth-contracts``` 


#### Compile the Project 
```
truffle compile
```

#### Migrate smart contracts to the locally running blockchain:` 
```
truffle migrate
```

#### Test smart contracts:
```
truffle test 
```
![Test](images/testing_capture.png)

All tests should pass.


### Deployment to Rinkeby

In order to deploy to Rinkeby test network, the `truffle-config.js` file has to be appropriately modifier by providing Infura key.
After that run the following command on the terminal
```
truffle migrate --reset --rinkeby
```
![Infura](images/Infura1.png)
![Infura](images/Infura2.png)
![Infura](images/Infura3.png)

