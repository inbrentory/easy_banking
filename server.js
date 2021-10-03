const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EasyBank = require('./model/easyBank')


const app = express();

app.use(express.json()); // enable to use JSON type from API
app.use(cors());         // enable cross origin to cooperate 

mongoose.connect('mongodb+srv://brent:brentPW12@cluster-starter.g5eso.mongodb.net/mern?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then (() => console.log('connected'))
    .catch(console.error)

app.get('/data', auth, async (req, res) => {
    const data = await EasyBank.find();

    res.json(data);
    res.send(data);
})

app.post('/post', async (req, res) => {
    const addData = new EasyBank({
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        amount: req.body.amount

    });
    addData.save();
    res.json(addData);
})

app.get('/:email', (req, res) => {    
    if (!req.params.email){
        return;
    }
    let email = req.params.email;
    EasyBank.findOne({email: email})
        .then(result => {
            console.log(email);
            res.send(result);
        });
});

app.put('/updateAmount/:email', async (req,res) =>{

    let email = req.params.email;
    const changedAmount = req.body.changedAmount

    try{
        await EasyBank.findOne({email: email}, (error, updateAmount)=>{
            updateAmount.amount = changedAmount
            updateAmount.save();
            res.send('update');
        });
    } catch (error) {
        console.log(error);
    };
});

function auth(req, res, next){
    if (req.query.admin === 'true'){
        next()
    } else {
        res.send('authentication required')
    }
}

const path = require("path")

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log('running on 3001')
});