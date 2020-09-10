let tweet = {};

function submit(uid){
    console.log(uid);
    dUrl  = "/tweets/"+uid;
    console.log(dUrl);
	let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("tweet deleted");
			//init();
		}
	}

	// //Send a delete request
	req.open("DELETE", dUrl);
	//req.setRequestHeader("Content-Type", "application/json");
	req.send();
}


function edit(uid){
	let tweet = {};
    console.log(uid);
    dUrl  = "/tweets/"+uid;
	console.log(dUrl);
	tweet.author = document.getElementById("author").value;
	tweet.content = document.getElementById("content").value;
	let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("tweet edited");
			//init();
		}
	}

	// //Send a delete request
	req.open("POST", dUrl);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(tweet));
}
