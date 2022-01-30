async function main() {
    const BBIContract = await ethers.getContractFactory("BlockchainBackedItem")

  
    // Start deployment, returning a promise that resolves to a contract object
    const BBI = await BBIContract.deploy()
    console.log("Contract deployed to address:", BBI.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  
