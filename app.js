const port = 3000
const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { readSync } = require('fs');
const uri = "mongodb+srv://brianliu8709:hack-umass-lendit!@cluster0.nkvb3ht.mongodb.net/?retryWrites=true&w=majority"

const borrowRequestSchema = new mongoose.Schema({
    itemName: String,
    borrowerName: String,
    borrowerEmail: String,
    lenderEmail: String,
    lenderEmail: String,
    timeStart: Date,
    timeEnd: Date,
    wasAccepted: Boolean,
    wasReturned: Boolean,
}, { strict: false })

const lendRequestSchema = new mongoose.Schema({
    itemName: String,
    borrowerName: String,
    borrowerEmail: String,
    lenderName: String,
    lenderEmail: String,
    timeStart: Date,
    timeEnd: Date,
    wasAccepted: Boolean,
    wasReturned: Boolean
}, { strict: false })

// borrowHistory and lendHistory are arrays of the ids of borrowRequests and lendRequests that the user is
// involved in, respectively
const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    borrowHistory: Array,
    lendHistory: Array
})

const BorrowRequest = mongoose.model('borrowrequest', borrowRequestSchema);
const LendRequest = mongoose.model('lendrequest', lendRequestSchema)
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
})

// inserts an BorrowRequest entry into the MongoDB
const addBorrowRequest = async (itemName, borrowerName, borrowerEmail, timeStart, timeEnd) => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    await BorrowRequest.create({
        itemName: itemName,
        borrowerName: borrowerName,
        borrowerEmail: borrowerEmail,
        timeStart: timeStart,
        timeEnd: timeEnd,
        wasAccepted: false,
        wasReturned: false
    })
}
// inserts a LendRequest entry into the MongoDB
const addLendRequest = async (itemName, lenderName, lenderEmail, timeStart, timeEnd) => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    await LendRequest.create({
        itemName: itemName,
        lenderName: lenderName,
        lenderEmail: lenderEmail,
        timeStart: timeStart,
        timeEnd: timeEnd,
        wasAccepted: false,
        wasReturned: false
    })
}

// returns an array of all BorrowRequests in the MongoDB, if given a search filter, returns
// only the BorrowRequest items that contain that filter in their itemName property
const retrieveBorrowRequests = async (searchFilter = null) => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    const filter = searchFilter ? { itemName: new RegExp(searchFilter, 'i') } : {}
    await mongoose.connection
    const borrowRequestsCollection = mongoose.connection.db.collection('borrowrequests')
    const toReturn = await borrowRequestsCollection.find(filter).toArray()
    return toReturn
}

// returns an array of all LendRequests in the MongoDB, if given a search filter, returns
// only the LendRequest items that contain that filter in their itemName property
const retrieveLendRequests = async (searchFilter = null) => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    const filter = searchFilter ? { itemName: new RegExp(searchFilter, 'i') } : {}
    await mongoose.connection
    const lendRequestsCollection = mongoose.connection.db.collection('lendrequests')
    const toReturn = await lendRequestsCollection.find(filter).toArray()
    return toReturn
}

app.use(express.json());

app.get('/borrow-request', async (req, res) => {
    const searchFilter = req.body != undefined && req.body.searchFilter != undefined 
    ? req.body.searchFilter 
    : null
    const borrowRequests = await retrieveBorrowRequests(searchFilter)
    res.json(borrowRequests)
})
app.get('/lend-request', async (req, res) => {
    const searchFilter = req.body != undefined && req.body.searchFilter != undefined 
    ? req.body.searchFilter 
    : null
    const lendRequests = await retrieveLendRequests(searchFilter)
    res.json(lendRequests)
})

app.get('/', async (req, res) => {
    // await addBorrowRequest('iClicker', 'Brian Liu', 'bxliu@umass.edu', new Date(), new Date ())
    // await addLendRequest('iClicker', 'Shobhit', 'bxliu@umass.edu', new Date(), new Date ())
    borrowReqs = await retrieveBorrowRequests()
    lendReqs = await retrieveLendRequests()
    textToReturn = borrowReqs
    res.json(textToReturn)
})

app.post('/borrow-request', async (req, res) => {
    const { itemName, borrowerName, borrowerEmail, timeStart, timeEnd } = req.body
    await addBorrowRequest(itemName, borrowerName, borrowerEmail, timeStart, timeEnd)
})

app.post('/lend-request', async (req, res) => {
    const { itemName, lendName, lendEmail, timeStart, timeEnd } = req.body
    await addLendRequest(itemName, lendName, lendEmail, timeStart, timeEnd)
})

app.use(express.static( path.join(__dirname, 'public')))

// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, '/views'))

app.listen(port,() => {
    console.log(`Server running at port `+port)
});
