import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";

const process = dotenv;
const env = process.config().parsed!;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: env.ALCHEMY_SEPOLIA_URL,
      accounts: [env.WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: env.ETHERSCAN_API_KEY,
  },
};

export default config;
