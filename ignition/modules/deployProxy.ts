import { ethers, upgrades } from "hardhat";

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address
  );

  console.log("Proxy Contract Address : ", proxy.address);
  console.log("implementation Contract Address : ", implementationAddress);
}

main()
  .then(() => {
    console.log("deploying contract process completed!!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
