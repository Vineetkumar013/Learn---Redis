const express = require('express');
// const wiston = require('wiston');
// const expressWinston = require('express-winston');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/user", (req, res) => {
    res.send("Hello user");
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
}); 