// const http = require('http');
const port = 3000
const express = require('express');
const app = express();
const path = require('path');

// const mongoose = require('mongoose')
// const personSchema = new mongoose.Schema({email: String}, { strict: false })
// const Person = mongoose.model('grades', personSchema);
// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is connected!')
// })

app.use(express.json());

app.use(express.static( path.join(__dirname, 'public')))

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'))

// const loadHTMLLab = lab => {
//     app.get(lab.url, (req, res) => {
//       res.render('lessonTemplate.ejs', {current: lab, lessons: lessons})
//     })
// }

// app.get('/index', (req, res) => {
//     res.render('index')
// })

app.get('*', (req, res) => {
    res.send('hello world')
})

app.listen(port,() => {
    console.log(`Server running at port `+port);
});
