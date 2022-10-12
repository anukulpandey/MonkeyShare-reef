const { Web3Storage, getFilesFromPath } = require('web3.storage');
const express = require('express');
const multer  = require('multer')
const path = require('path');
const mongoose = require('mongoose');
const Files = require("../ipfssetup/models/userData");
var bodyParser = require('body-parser');
const { async } = require('rxjs');
let ejs = require('ejs');
require('dotenv').config({path: __dirname + '/.env'})

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('views'));

const url = process.env.MONGO_URL
mongoose.Promise = global.Promise;
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(res => console.log("CONNECTION WITH DATABASE SUCCESSFUL")).catch(err => console.log(err))


async function main (inp) {
  const token = process.env.TOKEN

  const storage = new Web3Storage({ token })

  const helper = async(p)=>{
    const x = await getFilesFromPath(p);
    return x;
  }
  const m = await helper(inp);
  console.log(m)

  console.log(`Uploading files`)
  const cid = await storage.put(m)
  console.log(`https://dweb.link/ipfs/${cid}`)
  return `https://dweb.link/ipfs/${cid}`
}

app.get('/',(req,res)=>{
  res.render("index");
})

app.get('/dashboard/:address',async function(req,res){
  id = req.params.address
  const allFilesofUser = await Files.find({'address':id})
  res.render("db",data=allFilesofUser)
})

app.post('/upload', upload.single('upload-file'), async function (req, res, next) {
  if(req.body.password!="youAreSpecialREEFsMonkey"){
    res.send("incorrect password")
    return
  }
  console.log(req.body)
  console.log(req.file.path)
  const furl = await main(req.file.path)
  const data={'address':req.body.address,'desc':req.body.desc,'url':furl};
  Files.create(data).then((data)=>{
    console.log("inserted data successfully!")
  })
  const someda = await Files.find();
  console.log(someda);
  res.send(req.file)
})

app.listen(5000, () => {
  console.log(`http://127.0.0.1:5000`)
})