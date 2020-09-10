let tweet = {};

function submit(){
	tweet.author = document.getElementById("author").value;
	tweet.content = document.getElementById("content").value;

	let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			alert("tweet saved");
			//init();
		}
	}

	//Send a PUT request to the server containing the recipe data
	req.open("PUT", `/tweets`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(tweet));
}
