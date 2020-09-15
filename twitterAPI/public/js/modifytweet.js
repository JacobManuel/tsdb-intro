function submit(uid){
    console.log(uid);
    dUrl  = "/tweets/"+uid;
    console.log(dUrl);
	let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("tweet deleted");
		}
	}

	// //Send a delete request
	req.open("DELETE", dUrl);
	//req.setRequestHeader("Content-Type", "application/json");
	req.send();
}


function edit(uid){
	let rMethod = "";
	let tweet = {};
    console.log(uid);
    dUrl  = "/tweets/"+uid;
	console.log(dUrl);
	tweet.author = document.getElementById("author").value;
	tweet.content = document.getElementById("content").value;
	if (tweet.author == "" || tweet.content == ""){
		rMethod = "PATCH";
	}
	else{
		rMethod = "PUT";
	}
	let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("tweet edited");
		}
	}

	// //Send a PUT request
	req.open(rMethod, dUrl);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(tweet));
}
