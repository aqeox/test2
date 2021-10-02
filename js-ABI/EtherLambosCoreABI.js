//function loadEtherLambosContractABI(){
	try {
	    console.log("Loading EtherLambosContract");
			var EtherLambosContract = web3.eth.contract(
				[
					{
						"constant": true,
						"inputs": [
							{
								"name": "_interfaceID",
								"type": "bytes4"
							}
						],
						"name": "supportsInterface",
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
						"constant": true,
						"inputs": [],
						"name": "cfoAddress",
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
						"constant": true,
						"inputs": [
							{
								"name": "_tokenId",
								"type": "uint256"
							},
							{
								"name": "_preferredTransport",
								"type": "string"
							}
						],
						"name": "tokenMetadata",
						"outputs": [
							{
								"name": "infoUrl",
								"type": "string"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "lambosTuneCount",
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
						"inputs": [],
						"name": "name",
						"outputs": [
							{
								"name": "",
								"type": "string"
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
								"name": "_to",
								"type": "address"
							},
							{
								"name": "_tokenId",
								"type": "uint256"
							}
						],
						"name": "approve",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_attributes",
								"type": "uint256"
							},
							{
								"name": "_owner",
								"type": "address"
							},
							{
								"name": "_model",
								"type": "uint64"
							}
						],
						"name": "createLambo",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "ceoAddress",
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
						"constant": true,
						"inputs": [],
						"name": "serviceStation",
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
						"constant": true,
						"inputs": [],
						"name": "totalSupply",
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
						"inputs": [
							{
								"name": "_from",
								"type": "address"
							},
							{
								"name": "_to",
								"type": "address"
							},
							{
								"name": "_tokenId",
								"type": "uint256"
							}
						],
						"name": "transferFrom",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_newCEO",
								"type": "address"
							}
						],
						"name": "setCEO",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_newCOO",
								"type": "address"
							}
						],
						"name": "setCOO",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "marketPlace",
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
								"name": "_newattributes",
								"type": "uint256"
							},
							{
								"name": "_tokenId",
								"type": "uint256"
							}
						],
						"name": "tuneLambo",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [
							{
								"name": "",
								"type": "uint256"
							}
						],
						"name": "lamboIndexToApproved",
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
						"constant": true,
						"inputs": [
							{
								"name": "_id",
								"type": "uint256"
							}
						],
						"name": "getLamboAttributes",
						"outputs": [
							{
								"name": "attributes",
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
						"name": "unpause",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_address",
								"type": "address"
							}
						],
						"name": "setServicestationAddress",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_newCFO",
								"type": "address"
							}
						],
						"name": "setCFO",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "secs",
								"type": "uint256"
							}
						],
						"name": "setSecondsPerBlock",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
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
						"constant": false,
						"inputs": [
							{
								"name": "_attributes",
								"type": "uint256"
							},
							{
								"name": "_owner",
								"type": "address"
							},
							{
								"name": "_model",
								"type": "uint64"
							},
							{
								"name": "count",
								"type": "uint256"
							}
						],
						"name": "bulkCreateLambo",
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
						"name": "ownerOf",
						"outputs": [
							{
								"name": "owner",
								"type": "address"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "newContractAddress",
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
						"constant": true,
						"inputs": [
							{
								"name": "_owner",
								"type": "address"
							}
						],
						"name": "balanceOf",
						"outputs": [
							{
								"name": "count",
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
						"name": "withdrawTuneBalances",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_v2Address",
								"type": "address"
							}
						],
						"name": "setNewAddress",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "secondsPerBlock",
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
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [
							{
								"name": "_owner",
								"type": "address"
							}
						],
						"name": "tokensOfOwner",
						"outputs": [
							{
								"name": "ownerTokens",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [],
						"name": "withdrawSaleBalances",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "symbol",
						"outputs": [
							{
								"name": "",
								"type": "string"
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
								"name": "_id",
								"type": "uint256"
							}
						],
						"name": "getLamboModel",
						"outputs": [
							{
								"name": "model",
								"type": "uint64"
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
								"name": "_to",
								"type": "address"
							},
							{
								"name": "_tokenId",
								"type": "uint256"
							}
						],
						"name": "transfer",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "cooAddress",
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
						"constant": true,
						"inputs": [
							{
								"name": "",
								"type": "uint256"
							}
						],
						"name": "lamboIndexToOwner",
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
								"name": "_address",
								"type": "address"
							}
						],
						"name": "setMarketplaceAddress",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "erc721Metadata",
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
								"name": "_carId",
								"type": "uint256"
							},
							{
								"name": "_price",
								"type": "uint256"
							}
						],
						"name": "createLamboSale",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"name": "_contractAddress",
								"type": "address"
							}
						],
						"name": "setMetadataAddress",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [
							{
								"name": "_id",
								"type": "uint256"
							}
						],
						"name": "getLambo",
						"outputs": [
							{
								"name": "buildTime",
								"type": "uint256"
							},
							{
								"name": "attributes",
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
						"name": "lambosBuildCount",
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
						"inputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"payable": true,
						"stateMutability": "payable",
						"type": "fallback"
					},
					{
						"anonymous": false,
						"inputs": [
							{
								"indexed": false,
								"name": "from",
								"type": "address"
							},
							{
								"indexed": false,
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"name": "tokenId",
								"type": "uint256"
							}
						],
						"name": "Transfer",
						"type": "event"
					},
					{
						"anonymous": false,
						"inputs": [
							{
								"indexed": false,
								"name": "owner",
								"type": "address"
							},
							{
								"indexed": false,
								"name": "approved",
								"type": "address"
							},
							{
								"indexed": false,
								"name": "tokenId",
								"type": "uint256"
							}
						],
						"name": "Approval",
						"type": "event"
					},
					{
						"anonymous": false,
						"inputs": [
							{
								"indexed": false,
								"name": "owner",
								"type": "address"
							},
							{
								"indexed": false,
								"name": "lamboId",
								"type": "uint256"
							},
							{
								"indexed": false,
								"name": "attributes",
								"type": "uint256"
							}
						],
						"name": "Build",
						"type": "event"
					},
					{
						"anonymous": false,
						"inputs": [
							{
								"indexed": false,
								"name": "_newattributes",
								"type": "uint256"
							},
							{
								"indexed": false,
								"name": "_tokenId",
								"type": "uint256"
							}
						],
						"name": "Tune",
						"type": "event"
					},
					{
						"anonymous": false,
						"inputs": [
							{
								"indexed": false,
								"name": "newContract",
								"type": "address"
							}
						],
						"name": "ContractUpgrade",
						"type": "event"
					}
				]
	);
	}
	catch(err) {
	    console.log("Loading EtherLambosContract failed");
	}
	//}



		