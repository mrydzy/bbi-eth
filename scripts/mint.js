require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)
const contract = require("../artifacts/contracts/BlockchainBasedItem.sol/BlockchainBasedItem.json")
console.log(JSON.stringify(contract.abi))
const contractAddress = process.env.CONTRACT_ADDRESS
const bbiContract = new web3.eth.Contract(contract.abi, contractAddress)


