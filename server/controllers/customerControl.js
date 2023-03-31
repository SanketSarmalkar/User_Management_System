
// app.get('/', (req, res) => {
//     const locals = {
//         title: 'Home',
//         description: 'This is the home page',
//     }
//     // res.send("Hello World");
//     res.render('index', locals);
// });


exports.homepage = async(req,res)=>{
    const locals = {
        title: 'Home',
        description: 'This is the home page',
    }
    // res.send("Hello World");
    res.render('index', locals);
}



exports.addCustomer = async(req,res)=>{
    const locals = {
        title: 'Add Customer',
        description: 'add a new customer',
    }
    // res.send("Hello World");
    res.render('./customer/add', locals);
}