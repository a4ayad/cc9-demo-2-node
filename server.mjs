  
import express from 'express';

import { dataResume } from './data-resume.mjs';

import { home } from './home.mjs';

const PORT = process.env.PORT || 5000

const app = express();

// get pull data, route & callback
// request/response
// build backend apps, URL
// Route to the home page
app.get ('/', (req, res) => { 
    res.send('Welcome to Ahmed Resume!')
});

app.get ('/id', (req, res) => {
    res.send({
        id: Math.random()
    })
});

// 'hello' route
app.get ('/hello', (req, res) => { 
    res.send(hello)
});


app.get('/ahmedResume', (req, res) => 
    res.send(dataResume) 
);

app.post('/hello', (req, res) => {
    req.body()
});

app.listen(PORT, () => {
    console.log(`App is starting now on ${PORT}`)
});