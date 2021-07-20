
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const dayjs = require('dayjs')
const fs = require('fs')
// const xlsx = require('node-xlsx');
const xlsx = require('xlsx');
const cors = require('cors');
// const logger = require("./logger").Logger;

const port = 4000;
const app = express()
// let upload = multer({ dest: 'uploads/' })

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(multer());


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true); 
    next()
})

app.get('/', (req, res) => {
    res.send('API')
})


const readExcel = (obj) => {
    let removeChiness = str => {
        var reg = /[\u4e00-\u9fa5]/g;   
        let str1 = str.replace(reg, ""); 
        return str1.replace(/,/g, '');
    } 
    let rows = obj;
    let start = true;
    let stop = false;
    let items = rows
        .filter((f,i) => i>0)
        .map((v,r) => ({code:removeChiness(v[0]), address: removeChiness(v[4])}));
    return items;
}


var mul = multer({
    storage: multer.memoryStorage(),
});

app.post('/upload', mul.single('excel'), async (req, res) => {
    try {
        let obj = await xlsx.read(req.file.buffer, {type:"buffer"});
        const first_worksheet = obj.Sheets[obj.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(first_worksheet, { header: 1 });
        res.send(readExcel(data));
    } catch (e) {
        res.status(400).send('please name excel')
    }
})

app.listen(port, () => {
    
    console.log(`Start server at port ${port}.`)
})