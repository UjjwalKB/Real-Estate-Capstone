const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS
const OWNER_ADDRESS = process.env.OWNER_ADDRESS
const NETWORK = process.env.NETWORK
const NUM_OF_END_TOKENID = 10

const CONTRACT_FILE = require('./eth-contracts/build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_FILE.abi;


if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
  return
}




async function main() {
  const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
  const web3Instance = new web3(
    provider
  )

  if (NFT_CONTRACT_ADDRESS) {
    const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" })

    // Token issued directly to the owner.
    for (var i = 0; i < NUM_OF_END_TOKENID; i++) {
      const result = await nftContract.methods.mint(OWNER_ADDRESS, i).send(
        {
          "gas": 4712388,
          "gasPrice": 100000000000,
          from: OWNER_ADDRESS
        });
      console.log("Minted token. Transaction: " + result.transactionHash)
    }
  }
}

main()