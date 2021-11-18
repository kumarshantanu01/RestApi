const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)  =>{
    res.send('hello shantanu');
})

app.get('/students', (req, res)  =>{
    res.send('hello students');
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})