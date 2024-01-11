require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-sepolia.g.alchemy.com/v2/jpdBzWZxFHNUC1cc0HrjuYM77wreNb6i",
      accounts: [
        "b381ec855749c335db93f6d705ec9650cf660c20b4ebd2d9f82b0221161a0b8e",
      ],
    },
  },
};
