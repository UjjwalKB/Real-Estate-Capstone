var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');

var proofJSON = {
	"proof":
	{
		"A":["0x216a7cffe9c4311dcefd444869b8b849cba3185a9bfb4e14bcf5c8e0c3298bf7", "0x14442fb77cdd661a113e52098cb6233f9c0f5f2491a10fafb6a00ee147368657"],
		"A_p":["0x14492f20257a242697415790452ffad2da568c5109e0439fa90dc31c05673036", "0x1569871550acba8ec3cc9f737d805fad8febbc5efaec90922bb5f20d78dcacad"],
		"B":
			[["0x23dd327f058c9f5634847b8143bc4feb45b901262df341cdb16f049290c1fd98", "0x21bf34739043dfd7e2aa93f8ffb52781bd8ee6959db8da6e4a0ab648ed7a73d4"], ["0x1584cfc986ba5398aa4a11732045268a527900afe991517709f577a84c9b0134", "0x23a2625eb136d8a7884f5019b8726da13b6f0f7807e150aff7bc3d23e6f4f5cb"]],
		
		"B_p":["0x12c20b0899dcadb234c0487575550a880335be92480e9d06c4afa6d31be558ad", "0xe2e72b9d811300acb82b3f33686c2b1f72380b0875c94efe886ea393f5732a8"],
		"C":["0x10aeb393cd79d0bf2a1ef1e886401d47aeb4c98a959a3ac450812ce1498ea286", "0x23b1cccc5f4951fcc27203ade9371f279b13d566ba91f3b8fdbcb8916af4295e"],
		"C_p":["0xe57e7b4eaae2cd9fe0bf9d3a58f3cc2bab2d1c90598af1700f22050e3b4b68b", "0x15b10ea89fa350924d200cc81d4daaf20601de25fc2238dfa0e135d048d13b61"],
		"H":["0x3007e85fd84c98473a315ad16e4e269a073629f719cb9040a2e0fae7e951498e", "0x1038e393f6516d55d8cd75b6a6a6b0c7590e3cc12d21e198b472234f8fd2ad1e"],
		"K":["0x2f892476d701d9c60dbb6c93f2db14687d38ad6d9d8a214bd0359c7ac9a8ef12", "0x2d56d617334e1b2433c7711c77ac552cc096333bf32d6424625fe46d45573dd7"]
	},
    "input":[9,1]
}


contract('SolnSquareVerifier', accounts => {
	//read first account
    const account = accounts[0];
    const account2 = accounts[1];
    //read from proof json
    const a = proofJSON["proof"]["A"];
    const b = proofJSON["proof"]["B"];
    const c = proofJSON["proof"]["C"];
    const a_p = proofJSON["proof"]["A_p"];
    const b_p = proofJSON["proof"]["B_p"];
    const c_p = proofJSON["proof"]["C_p"];
    const h = proofJSON["proof"]["H"];
    const k = proofJSON["proof"]["K"];

    const correctProofInput = proofJSON["input"];

    describe('Testing SolnSquareVerifier', function () {
        before(async function () {
            const verifier = await Verifier.new({from: account});
            this.contract = await SolnSquareVerifier.new(verifier.address, {from: account});
        });
        
        it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
            let canBeMinted = await this.contract.mintNewNFT(account2, 2,a,a_p,b,b_p,c,c_p,h,k,correctProofInput, {from: account});
            let owner = await this.contract.ownerOf(2);
            assert.equal(account2, owner, "Token was not minted.");
        });
        

        it('Test if an already existing solution can not be added for contract - SolnSquareVerifier', async function () {
            let isAlreadyAdded = false;
            try{
                await this.contract.addSolution(account2, 2,a,a_p,b,b_p,c,c_p,h,k,correctProofInput);
                await this.contract.addSolution(account2, 3,a,a_p,b,b_p,c,c_p,h,k,correctProofInput); 
            } catch(e) {
                isAlreadyAdded = true;
            }
            assert.equal(isAlreadyAdded, true, "Solution was added");
        });
    });

})