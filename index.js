
// More Info: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Basic HTTP Call: Replace with the url you want to GET
fetch('http://localhost:8000/tweets') 
  .then(response => response.text())
  .then(text => console.log(text))

// Basic REST Call: Server responds with JSON, which you can get as an object instead of text
fetch('http://localhost:8000/tweets') 
  .then(response => response.json())
  .then(json => console.log(json))

// REST POST
fetch(
  'http://localhost:8000/tweets',
  {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({author: 'Test', content: '#CRC'})
  }
) 
  .then(response => response.json())
  .then(json => console.log(json))