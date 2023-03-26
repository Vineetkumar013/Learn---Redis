const express = require('express');
const app = express();
const redis = require('redis');
const axios = require('axios');


const client = redis.createClient();
client.on('error', (err) => console.log("Redis Clieent", err));
client.connect();

app.get("/", async (req, res) => {
    const response = await client.get("name")
    res.send("Hello World!" + response);
})

app.get("/set/name/:id", async (req, res) => {
    const { id } = req.params;
    await client.set("name", id);
    res.send("Successfull update name to : " + id);
})

app.get("users/:user_id", async (req, res) => {
    const { user_id } = req.params;
    const response = await axios.get("https://api.github.com/users/" + user_id);
    console.log(response);
    res.send("Successfull")
})

app.get("/users/:user_id", async (req, res) => {
    const { user_id } = req.params;
    const response = await axios.get(user_id);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
