const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

let fname = 'admin';
let lname = '1234';

app.use(express.json());
app.use(express.static(path.join(__dirname, "../fe")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/get", (req, res) => {
    console.log("GET request data:", req.query);
    res.send("GET request התקבל!");
});

app.post("/contact", (req, res) => {
    console.log("POST request data:", req.body);
    res.send("Form data received");
});

app.post("/login", (req, res) => {
    console.log("POST request data:", req.body);
    res.send("Form data received");

    const { username, password } = req.body;
    if(username==="admin"&&password===12345){
        console.log("data correct");
    }
    else
    {
        console.log("data incorrect");
    }
});


app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);
});