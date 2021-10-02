
/*
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
	console.log("web3 defined Account -> "+ web3.eth.accounts[0]);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
 web3.eth.defaultAccount=web3.eth.accounts[0];

});*/

/*    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
		console.log("web3 defined Account -> "+ web3.eth.accounts[0]);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
	
 web3.eth.defaultAccount=web3.eth.accounts[0];*/
