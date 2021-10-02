//function loadServiceStationContractABI(){
try {
    console.log("Loading ServiceStationContract");
		var ServiceStationContract = web3.eth.contract(
			[
				{
					"constant": false,
					"inputs": [
						{
							"name": "index",
							"type": "uint256"
						}
					],
					"name": "disableTuneOption",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_index",
							"type": "uint256"
						}
					],
					"name": "getOption",
					"outputs": [
						{
							"name": "_startChange",
							"type": "uint256"
						},
						{
							"name": "_rangeChange",
							"type": "uint256"
						},
						{
							"name": "_attChange",
							"type": "uint256"
						},
						{
							"name": "_plusMinus",
							"type": "bool"
						},
						{
							"name": "_price",
							"type": "uint128"
						},
						{
							"name": "active",
							"type": "bool"
						},
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
					"constant": true,
					"inputs": [],
					"name": "isServicestation",
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
					"inputs": [
						{
							"name": "_tokenId",
							"type": "uint256"
						},
						{
							"name": "_optionIndex",
							"type": "uint256"
						}
					],
					"name": "tuneLambo",
					"outputs": [],
					"payable": true,
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "index",
							"type": "uint256"
						}
					],
					"name": "enableTuneOption",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
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
							"name": "_nftAddress",
							"type": "address"
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
					"constant": true,
					"inputs": [],
					"name": "getOptionCount",
					"outputs": [
						{
							"name": "_optionCount",
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
							"name": "_startChange",
							"type": "uint32"
						},
						{
							"name": "_rangeChange",
							"type": "uint32"
						},
						{
							"name": "_attChange",
							"type": "uint256"
						},
						{
							"name": "_plusMinus",
							"type": "bool"
						},
						{
							"name": "_replace",
							"type": "bool"
						},
						{
							"name": "_price",
							"type": "uint128"
						},
						{
							"name": "_isactive",
							"type": "bool"
						},
						{
							"name": "_model",
							"type": "uint64"
						},
						{
							"name": "_optionIndex",
							"type": "uint256"
						}
					],
					"name": "changeTuneOption",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "_startChange",
							"type": "uint32"
						},
						{
							"name": "_rangeChange",
							"type": "uint32"
						},
						{
							"name": "_attChange",
							"type": "uint256"
						},
						{
							"name": "_plusMinus",
							"type": "bool"
						},
						{
							"name": "_replace",
							"type": "bool"
						},
						{
							"name": "_price",
							"type": "uint128"
						},
						{
							"name": "_model",
							"type": "uint64"
						}
					],
					"name": "newTuneOption",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
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
					"constant": true,
					"inputs": [],
					"name": "optionCount",
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
							"name": "",
							"type": "uint64"
						}
					],
					"name": "modelIndexToOptionCount",
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
							"name": "_model",
							"type": "uint64"
						}
					],
					"name": "getOptionsForModel",
					"outputs": [
						{
							"name": "_optionsModel",
							"type": "uint256[]"
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
					"inputs": [
						{
							"name": "_nftAddress",
							"type": "address"
						}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "constructor"
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
    console.log("Loading ServiceStationContract failed");
}
//}