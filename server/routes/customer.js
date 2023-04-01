const express = require('express');
const router = express.Router();
const app = express();
const  customerController = require('../controllers/customerControl');

router.get('/', customerController.homepage);
router.get('/add', customerController.addCustomer);
router.post('/add', customerController.addCustomerPost);
router.get('/dashboard', customerController.dashboard);
// app.get('/', (req, res) => {
//     const locals = {
//         title: 'Home',
//         description: 'This is the home page',
//     }
//     // res.send("Hello World");
//     res.render('index', locals);
// });


module.exports = router;