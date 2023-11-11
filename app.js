// const http = require('http');
const port = 3000
const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose')
const uri = "mongodb+srv://brianliu8709:hack-umass-lendit!@cluster0.nkvb3ht.mongodb.net/?retryWrites=true&w=majority"

// defines the ItemRequets object in MongoDB, params to be specified
const itemRequestSchema = new mongoose.Schema({
    itemName: String
}, { strict: false })
const ItemRequest = mongoose.model('ItemRequest', itemRequestSchema);
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
})

// inserts an ItemRequest entry into the MongoDB, params to be specified
const addItemRequest = async (itemName) => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    await ItemRequest.create({itemName: itemName})
}

app.use(express.json());

app.use(express.static( path.join(__dirname, 'public')))

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'))


// app.get('/index', (req, res) => {
//     res.render('index')
// })

app.get('*', async (req, res) => {
    res.send('hello world')
})

app.listen(port,() => {
    console.log(`Server running at port `+port);
});
