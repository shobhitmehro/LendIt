// const http = require('http');
const port = 3000
const { auth, requiresAuth } = require('express-openid-connect');
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

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: "xRCHMjJBoQujz6VIapne4yWSZKYu5PjQ",
    issuerBaseURL: 'https://dev-axceyt6u5q46rboz.us.auth0.com',
    secret: 'LONG_RANDOM_STRING'
};

app.use(auth(config));

app.get('/', (req, res) => {
    res.send(
      req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
    )
  });

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
});

// inserts an ItemRequest entry into the MongoDB, params to be specified
const addItemRequest = async (itemName) => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    await ItemRequest.create({itemName: itemName})
}

// returns an array of all ItemRequests in the MongoDB
const retrieveItemRequests = async () => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error: ' + err)
    }
    await mongoose.connection
    collections = await mongoose.connection.db.collection('itemrequests')
    const itemRequestsCollection = mongoose.connection.db.collection('itemrequests')
    const toReturn = await itemRequestsCollection.find().toArray()
    return toReturn
}

<<<<<<< Updated upstream
=======
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
app.use(cors({
    origin: '*'
}))

app.get('/borrow-request', async (req, res) => {
    const searchFilter = req.body != undefined && req.body.searchFilter != undefined 
    ? req.body.searchFilter 
    : null
    // res.set('Access-Control-Allow-Origin', '*');
    const borrowRequests = await retrieveBorrowRequests(searchFilter)
    console.log(borrowRequests)
    res.json(JSON.stringify(borrowRequests))
    // res.json(780)
})
app.get('/lend-request', async (req, res) => {
    const searchFilter = req.body != undefined && req.body.searchFilter != undefined 
    ? req.body.searchFilter 
    : null
    const lendRequests = await retrieveLendRequests(searchFilter)
    res.json(JSON.stringify(lendRequests))
})

>>>>>>> Stashed changes
app.get('/', async (req, res) => {
    textToReturn = await retrieveItemRequests()
    res.send(textToReturn)
    // res.send("new text here")
})



<<<<<<< Updated upstream
app.use(express.json());
=======
app.post('/person-request', async (req, res)=>{
    const {name, email, borrowHistory, lendHistory} = req.body
})

>>>>>>> Stashed changes
app.use(express.static( path.join(__dirname, 'public')))

// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, '/views'))


// app.get('/index', (req, res) => {
//     res.render('index')
// })



app.listen(port,() => {
    console.log(`Server running at port `+port)
});
