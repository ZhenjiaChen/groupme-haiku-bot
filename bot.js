// const express = require('express');
// const app = express();
const port = process.env.PORT || 3000;

var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function handleRequest(callback) {
    let url = "https://api.groupme.com/v3/bots/post";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        }
    }
    request.open("POST", url, true);
    request.send(JSON.stringify({
        "bot_id": process.env.BOT_ID,
        "text": "reeeeeeeeee"
    }));
}

http.createServer(function (req, res) {
    handleRequest((response) => {
        console.log("POST request sent");
        console.log(response);
    });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(port);