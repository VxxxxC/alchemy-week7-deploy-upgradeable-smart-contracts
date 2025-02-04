import { ethers, upgrades } from "hardhat";

const proxyAddress = "0xA3B58c050c3Ff1b8fAC4bA2432c76B09BaA5f003";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgrade = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);
  await upgrade.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("Current Contract Owner : ", upgrade.address);
  console.log("Current Implmentation Contract : ", implementationAddress);
}

main()
  .then(() => {
    console.log("Contract Upgrade Completed !");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
