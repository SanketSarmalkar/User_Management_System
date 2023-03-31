require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');
const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
//ejs and handlebars are the most popular template engines

// app.get('/', (req, res) => {
//     const locals = {
//         title: 'Home',
//         description: 'This is the home page',
//     }
//     // res.send("Hello World");
//     res.render('index', locals);
// });
app.use('/', require('./server/routes/customer'));

app.get("*", (req, res) => {
    res.status(404).render('error_page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});