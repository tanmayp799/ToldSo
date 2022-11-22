require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    mumbai:{
      chainId:80001,
      url:'https://matic-mumbai.chainstacklabs.com',
      accounts:['488d00c4ca3feafbae2ccb38081fdf9de9a24ba81be1a9fa504be6edd8b13dc4'],
    }
  }
};


