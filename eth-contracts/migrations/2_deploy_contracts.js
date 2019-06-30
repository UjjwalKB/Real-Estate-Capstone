var Verifier = artifacts.require("Verifier");
//var ERC721Mintable = artifacts.require("ERC721Mintable");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function(deployer) {

  deployer.deploy(Verifier)
    .then(() => {
        return deployer.deploy(SolnSquareVerifier, Verifier.address);
    });
};

// module.exports = function (deployer) {

//   let symbol = 'REC'
//   let name = 'Real Estate Capstone'
//   let baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'

//   deployer.deploy(ERC721Mintable, name, symbol, baseTokenURI);
//   deployer.deploy(Verifier)
//     .then(() => {
//       return deployer.deploy(SolnSquareVerifier, Verifier.address, name, symbol, baseTokenURI)
//     });

// };
