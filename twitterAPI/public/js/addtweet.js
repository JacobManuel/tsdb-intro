function submit(){
	let tweet = {};
	tweet.author = document.getElementById("author").value;
	tweet.content = document.getElementById("content").value;

	let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("tweet saved");
		}
	}

	//Send a PUT request to the server containing the tweet data
	req.open("POST", `/tweets`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(tweet));
}
