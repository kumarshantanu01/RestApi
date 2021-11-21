const express = require('express');
require("./db/connection");
const Student = require('./models/students');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //to fetch json file

// app.post('/', (req, res)  =>{
//     res.send('hello kumar shantanu');
// })

//to create new students id
// app.post('/students', (req, res)  =>{
//     console.log(req.body);                  //to show in terminal the data from postman

//     const user = new Student(req.body);     //to get data from postman

//     user.save().then( () =>{                //user.save() to save the data in database
//         res.status(201).send(user);         //res.send() to get data from postman
//     }).catch((e) => {
//         res.status(400).send(e);            //res.status() is to show error like bad reques 404 or 201 created
//     })

//     // res.send('hello students');
// })

//using async await 
app.post('/students', async(req, res)  =>{

    try{
    const user = new Student(req.body); 
    const createUser = await user.save();
    res.status(201).send(createUser);
    }

    catch(e) {
        res.status(400).send(e);            //res.status() is to show error like bad reques 404 or 201 created
    }
    
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})