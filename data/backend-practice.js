// Create a new XMLHttpRequest object. This object lets JavaScript
// send HTTP requests to a server and receive responses.

// const xhr = new XMLHttpRequest();

// Configure the request.
// 'GET' = request data from the server.
// The second parameter is the URL we want to send the request to.

// xhr.open('GET', 'https://supersimplebackend.dev');

// Send the request to the server.
// After this line, the browser contacts the server and waits for a response.

// xhr.send();

// XMLHttpRequest (XHR) is an older way to communicate with a backend/server.
// It allows us to send HTTP requests (GET, POST, etc.) and receive responses.

const xhr = new XMLHttpRequest();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
// xhr.open('GET', 'https://supersimplebackend.dev/not-supported');

xhr.send();
