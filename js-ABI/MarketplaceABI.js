//function loadMarketplaceContractABI(){
try {
    console.log("Loading MarketplaceContract");
		var MarketplaceContract = web3.eth.contract(
			[
				{
					"constant": false,
					"inputs": [
						{
							"name": "_code",
							"type": "uint256"
						},
						{
							"name": "_commission",
							"type": "uint64"
						},
						{
							"name": "_pricecut",
							"type": "uint64"
						},
						{
							"name": "_affiliate_address",
							"type": "address"
						}
					],
					"name": "createAffiliate",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_nftAddress",
							"type": "address"
						},
						{
							"name": "_cut",
							"type": "uint256"
						}
					],
					"name": "setNFTAddress",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						}
					],
					"name": "cancelSaleWhenPaused",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						},
						{
							"name": "_code",
							"type": "uint256"
						}
					],
					"name": "bidReferral",
					"outputs": [],
					"payable": true,
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_code",
							"type": "uint256"
						}
					],
					"name": "getAffiliate",
					"outputs": [
						{
							"name": "affiliate_address",
							"type": "address"
						},
						{
							"name": "commission",
							"type": "uint64"
						},
						{
							"name": "pricecut",
							"type": "uint64"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "unpause",
					"outputs": [
						{
							"name": "",
							"type": "bool"
						}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						}
					],
					"name": "bid",
					"outputs": [],
					"payable": true,
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "paused",
					"outputs": [
						{
							"name": "",
							"type": "bool"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "withdrawBalance",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "ownerCut",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "pause",
					"outputs": [
						{
							"name": "",
							"type": "bool"
						}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_code",
							"type": "uint256"
						}
					],
					"name": "removeAffiliate",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "owner",
					"outputs": [
						{
							"name": "",
							"type": "address"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						},
						{
							"name": "_price",
							"type": "uint256"
						},
						{
							"name": "_seller",
							"type": "address"
						}
					],
					"name": "createSale",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						}
					],
					"name": "cancelSale",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						}
					],
					"name": "getCurrentPrice",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						}
					],
					"name": "getSale",
					"outputs": [
						{
							"name": "seller",
							"type": "address"
						},
						{
							"name": "price",
							"type": "uint256"
						},
						{
							"name": "startedAt",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "nonFungibleContract",
					"outputs": [
						{
							"name": "",
							"type": "address"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "newOwner",
							"type": "address"
						}
					],
					"name": "transferOwnership",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "isMarketplace",
					"outputs": [
						{
							"name": "",
							"type": "bool"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"name": "_nftAddress",
							"type": "address"
						},
						{
							"name": "_cut",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"indexed": false,
							"name": "price",
							"type": "uint256"
						}
					],
					"name": "SaleCreated",
					"type": "event"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"indexed": false,
							"name": "price",
							"type": "uint256"
						},
						{
							"indexed": false,
							"name": "buyer",
							"type": "address"
						}
					],
					"name": "SaleSuccessful",
					"type": "event"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "tokenId",
							"type": "uint256"
						}
					],
					"name": "SaleCancelled",
					"type": "event"
				},
				{
					"anonymous": false,
					"inputs": [],
					"name": "Pause",
					"type": "event"
				},
				{
					"anonymous": false,
					"inputs": [],
					"name": "Unpause",
					"type": "event"
				}
			]
);
}
catch(err) {
    console.log("Loading MarketplaceContract failed");
}
//}


		