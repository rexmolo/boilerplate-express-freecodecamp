let express = require('express');
// const {exec} = require('child_process');
// const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
let app = express();

// const webhooks = new Webhooks({
//  secret: "122dfewrrgygde&^&*$)fkdjfoer940%^$(230jfladm"
// });
//
//
//
// console.log("hello world");
//
//
app.get('/', (req, res) => {
 res.send('Hello Express');
})

// webhooks.on('push', () => {
//  exec('git pull');
// });






































 module.exports = app;
