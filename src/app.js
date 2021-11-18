const express = require('express');
require("./db/connection");
const Student = require('./models/students');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.post('/', (req, res)  =>{
//     res.send('hello kumar shantanu');
// })

//to create new students id
app.post('/students', (req, res)  =>{
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then( () =>{
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

    // res.send('hello students');
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})