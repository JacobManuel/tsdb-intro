//Database to store all recipe data

let fs = require('fs');
const tweetFolder = './tweets/';
const express = require('express');
const uuidv4 = require('uuid-v4');
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Start adding route handlers here
app.put('/tweets', addT);
app.get('/tweets', bTweet);
app.get('/tweets/:uID', dispT);
app.delete('/tweets/:uID', delT);
app.listen(3000);
console.log("Server listening at http://localhost:3000");

let dBase = [];

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
	//console.log("Pramassfdsfsdf: "+req);
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
			htmlRes +='<script src="/js/deletetweet.js"></script>';
			htmlRes +="<p>Author Name: " + fileCont[req.params.uID].author + "</p><br>";
			htmlRes+="<p>Content:" + fileCont[req.params.uID].content + "</p><br>";
			htmlRes+=`<button type="button" id="submit" onclick="submit('`+req.params.uID+`')">Delete Tweet</button><br>`;
		}
	});
	console.log(htmlRes);
	res.set('Content-Type', 'text/html')
	res.status(200).send(htmlRes);
}

function delT(req, res, next){
	database = {};
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
}