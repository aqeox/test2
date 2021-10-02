var getLamboModelHex="0xa080c8ba";
var getLamboAttributesHex="0x35347560";
var getLamboIndexToOwnerHex="0xb38697f6";
var el_api_key="my-api-key";
var elcontract="0xda9f43015749056182352e9dc6d3ee0b6293d80a";
var retmodel=0;
var retowner="";
//var retattributes=0;
var retattributes=new BigNumber.config({ POW_PRECISION: 0 });
retattributes= BigNumber(0);

function refreshLamboProfileEtherscan()
{
	
    var s = document.createElement("script");
	s.src = "https://etherlambos.io/php-etherscan/getLamboModel.php?contract="+elcontract+
	"&data="+getLamboModelHex+""+a2hex(lambo)+"&el_api_key="+el_api_key;
	
	console.log(s.src);
	document.body.appendChild(s);
}

function ret_model(myObj)
{
	var fetched_data=myObj.result;
	retmodel=parseInt(fetched_data,16);
	console.log("Retrieved Model: "+retmodel);
	
    var s = document.createElement("script");
	s.src = "https://etherlambos.io/prestage/php-etherscan/getLamboIndexToOwner.php?contract="+elcontract+
	"&data="+getLamboIndexToOwnerHex+""+a2hex(lambo)+"&el_api_key="+el_api_key;
	console.log(s.src);
	document.body.appendChild(s);
}

function ret_owner(myObj)
{
	var fetched_data=myObj.result;
	retowner=BigNumber(fetched_data,16).toString(16);
	retowner="0x"+retowner;
	console.log("Retrieved Owner: "+retowner);
	
    var s = document.createElement("script");
	s.src = "https://etherlambos.io/prestage/php-etherscan/getLamboAttributes.php?contract="+elcontract+
	"&data="+getLamboAttributesHex+""+a2hex(lambo)+"&el_api_key="+el_api_key;
	console.log(s.src);
	document.body.appendChild(s);
}

function ret_attributes(myObj)
{
	var fetched_data=myObj.result;
	

	retattributes= BigNumber(fetched_data,16); 
	console.log("Retrieved Attributes: "+retattributes);
	
	
	//Display Lambo:
	var result_json;
	result_json=JSON.parse(JSON.stringify(json_LamboInit));
		
	
	if(retattributes!=0)
		{
			
	
					//Build JSON Return:
			
			console.log("rCP: ASSIGN OBJECT: ");
			
			result_json= JSON.parse(JSON.stringify(showLambo(retattributes,retmodel,0)));
			result_json.token_id=lambo;
			result_json.owner=retowner;
			console.log(result_json.owner);
			
			result_json.tune_options=JSON.parse(JSON.stringify(showTuningKits(retattributes,retmodel))).tune_options;
			console.log("result_Lambo:");
			console.log(JSON.stringify(result_json));

	
		}
	console.log("BEFORE RETURN");	

	var ret_val=JSON.stringify(result_json);

	
	if(result_json.length==1 && result_json[0].token_id==0)
		{
			DisplayCarNotFound();
		}
		else{
			console.log(result_json.length+"<-l : t->"+result_json.token_id)
			DisplayCarView(result_json); 
		}
  
}
//////// HEX FUNCTIONS /////////

		var msgl=128;
		var froml=128;
        var qlength=0;
		//get_queuelength();


function hex2str(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
		{
		if(parseInt(hex.substr(i, 2), 16)!=0)
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));	
		}
        
    return str;
}




function a2hex(string) {
	var p=parseInt(string);
    var ret=p.toString(16);
	console.log("a2hex: "+ret);
	var l=64;
	
	l=l-ret.length;
	ret="";
	for(i=0;i<l;i++)
		{
			ret=ret+"0";
		}
		
		
	ret=ret+p.toString(16);
	
	return ret; 
}