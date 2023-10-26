const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/features', function (req, res) {
    res.sendFile(path.join(__dirname,'features.html'))
});

app.get('/pricing', function (req, res) {
    res.sendFile(path.join(__dirname,'pricing.html'))
});

app.get('/buyer', function (req, res) {
    res.sendFile(path.join(__dirname,'solution_buyer.html'))
});

app.get('/supplier', function (req, res) {
    res.sendFile(path.join(__dirname,'solution_supplier.html'))
});

app.get('/style.css', function(req, res){
    res.sendFile(path.join(__dirname,'style.css'))
});
app.get('/style1.css', function(req, res){
    res.sendFile(path.join(__dirname,'style1.css'))
});


app.use('/icons', express.static('icons'));
app.use('/Image', express.static('image'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})