const hre = require('hardhat')

async function main() {
  const LolaBoss = await hre.ethers.getContractFactory('LolaBoss')
  const lolaBoss = await LolaBoss.deploy()

  await lolaBoss.deployed()

  console.log('LolaBoss deployed to:', lolaBoss.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
