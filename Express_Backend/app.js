var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://lintang:1234@localhost:27017/dojo';

mongo.connect(url, (err)=>{
    console.log('Terhubung ke database!')
})

app.get('/data', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('ninja');
        collection.find({}).toArray((x, hasil)=>{
            res.send(hasil);
        })
    })
})

app.post('/data', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('ninja');
        var sesuatu = {
            nama: req.body.nama,
            usia: req.body.usia
        }
        collection.insert(sesuatu, (x, hasil)=>{
            res.send(hasil);
        })
    })
})

app.listen(3210, ()=>{
    console.log('Server aktif @port 3210!');
})