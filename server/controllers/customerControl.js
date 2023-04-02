// app.get('/', (req, res) => {
//     const locals = {
//         title: 'Home',
//         description: 'This is the home page',
//     }
//     // res.send("Hello World");
//     res.render('index', locals);
// });
const Customer = require("../models/customer");
const mongoose = require("mongoose");

exports.homepage = async (req, res) => {
  const locals = {
    title: "Home",
    description: "This is the home page",
  };
  // res.send("Hello World");
  res.render("index", locals);
};

exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add Customer",
    description: "add a new customer",
  };
  // res.send("Hello World");
  res.render("./customer/add", locals);
};

exports.addCustomerPost = async (req, res) => {
  console.log(req.body);

  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.telephone,
    email: req.body.email,
    createdAt: new Date(),
    updatedDate: new Date(),
  });
  // const locals = {
  //     title: 'New Customer Added',
  //     description: 'add a new customer',
  // }
  // res.send("Hello World");
  try {
    await Customer.create(newCustomer);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.dashboard = async (req, res) => {
  var result = new Customer();
  result = await Customer.find();
  console.log(result);
  res.render("./customer/dashboard", { result });
};

exports.findCustomer = async function(req, res, next){
  console.log(req.body);
  const find = req.body.find;
  try {
    var result = await Customer.find({ firstName: find});
    console.log(result);
    // var result = [];
    // for(let i=0;i<ids.length;i++){
    //   result[i] = await Customer.find({_id: ids[i]});
    // }
    // console.log(result);
    res.render('./customer/dashboard', {result});
  } catch (e) { 
    console.log(e);
  }
};
