let fs = require('fs');
const tweetFolder = './tweets/';
const express = require('express');
const uuidv4 = require('uuid-v4');
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//route handellers
app.post('/tweets', addT);
app.get('/tweets', bTweet);
app.get('/tweets/:uID', dispT);
app.delete('/tweets/:uID', delT);
app.put('/tweets/:uID', ediT);
app.listen(3000);
console.log("Server listening at http://localhost:3000");


function addT(req, res, next){
	database = {};
	console.log("Req Body");
	console.log(req.body);
	let uID = uuidv4();
	database[uID] = req.body;
	database[uID].id = uID;
	fs.writeFile(__dirname+'/tweets/'+uID+'.json', JSON.stringify(database), function (err) {
		if (err) throw err;
	});
	res.set('Content-Type', 'text/plain')
	res.status(200).send("");
	
}

function bTweet(req, res, next){
	console.log("browse");
	let htmlRes = "";
	fs.readdirSync(tweetFolder).forEach(file => {
		console.log(file);
		fileContRaw = fs.readFileSync(tweetFolder+file);
		let fileCont = JSON.parse(fileContRaw);
		let uniqueID =  Object.keys(fileCont);
		console.log("UniqueID: "+uniqueID);
		htmlRes += "<a href=\"/tweets/" +fileCont[uniqueID].id+ "\">" + fileCont[uniqueID].content + "</a><br>";
	});
	console.log("HtmlRes: "+htmlRes);
	res.set('Content-Type', 'text/html')
	res.status(200).send(htmlRes);
}

function dispT(req, res, next){
	console.log("Just params: "+req.params.uID);
	let htmlRes = "";
	fs.readdirSync(tweetFolder).forEach(file => {
		console.log(file);
		fileContRaw = fs.readFileSync(tweetFolder+file);
		let fileCont = JSON.parse(fileContRaw);
		let uniqueID =  Object.keys(fileCont);
		console.log("Param: "+req.params.uID);
		console.log("UniqueID: "+uniqueID);
		if (req.params.uID == uniqueID){
			console.log("Matched!");
			htmlRes +='<script src="/js/modifytweet.js"></script>';
			htmlRes +="<p>Author Name: " + fileCont[req.params.uID].author + "</p><br>";
			htmlRes+="<p>Content: " + fileCont[req.params.uID].content + "</p><br>";
			htmlRes+=`<button type="button" id="submit" onclick="submit('`+req.params.uID+`')">Delete Tweet</button><br>`;
			htmlRes+=`<p>Edit the author and/or content</p><br>Author Name: <input type="textbox" id="author" size="50">`;
			htmlRes+=`<br>Tweet Content: <textarea rows="5" cols="50" id="content"></textarea><br><br><button type="button" id="edit" onclick="edit('`+req.params.uID+`')">Edit Tweet</button>`;
		}
	});
	console.log(htmlRes);
	res.set('Content-Type', 'text/html')
	res.status(200).send(htmlRes);
}

function delT(req, res, next){
	console.log("Req Body");
	console.log(req.params.uID);
	fs.unlink(__dirname+'/tweets/'+req.params.uID+'.json', function(err){
		if (err){
			console.log("error");
		}
		else{
			console.log("file deleted!");
		}
	});
	res.set('Content-Type', 'text/plain')
	res.status(200).send("");
}

function ediT(req, res, next){
	
	console.log("Edit Function");
	console.log("Req Body");
	console.log(req.body);
	let body = req.body;
	let database = {};
	fs.readdirSync(tweetFolder).forEach(file => {
		console.log(file);
		fileContRaw = fs.readFileSync(tweetFolder+file);
		let fileCont = JSON.parse(fileContRaw);
		let uniqueID =  Object.keys(fileCont);
		console.log("Param: "+req.params.uID);
		console.log("UniqueID: "+uniqueID);
		if (req.params.uID == uniqueID){
			database[req.params.uID] =  fileCont[req.params.uID];
			database[req.params.uID].author = body['author'];
			database[req.params.uID].content = body['content'];
			console.log(database);
			fs.writeFile(__dirname+'/tweets/'+req.params.uID+'.json', JSON.stringify(database), function (err) {
				if (err) throw err;
			});
		}
	});
	res.set('Content-Type', 'text/plain')
	res.status(200).send("");
}