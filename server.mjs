  
import express from 'express';
import { dataResume } from './data-resume.mjs';
import { home } from './home.mjs';

const PORT = process.env.PORT || 5000

const app = express();

const { basics } = dataResume;

const { basics: { name,email,about } } = dataResume;

const { basics: { location: { city, state } } } = dataResume;

const { basics: { profiles: { github, linkedin } } } = dataResume;

const { basics: { education } } = dataResume;

const { basics: { education: { institution, degree, area } } } = dataResume;

const { basics: { work: { work0, work1, work2 } } } = dataResume;

const { basics: { work: { work0: { summary0, company0, position0 } } } } = dataResume;

const { basics: { work: { work1: { summary1, company1, position1 } } } } = dataResume;

const { basics: { work: { work2: { summary2, company2, position2 } } } } = dataResume;

// get pull data, route & callback
// request/response
// build backend apps, URL
// Route to the home page

// app.get('/data-resume', (req, res) => 
//     res.send(data-resume) 
// );

// app.get('/', (req, res) => 
//     res.send(home) 
// );

// app.get ('/', (req, res) => { 
//     res.send('Welcome to Ahmed Resume!')
// });

app.get('/id', (req, res) => {
    res.send({
        id: Math.random()
    })
});

// 'ahmedResume' route
// app.get ('/ahmedResume', (req, res) => { 
//     res.send(dataResume)
// });
app.get('/', (req, res) => { 
    res.send(home)
});

// app.get('/welcome', (req, res) => {
//     res.send(`
    
//     `)


})
// 'hello' route
// app.post('/hello', (req, res) => {
//     req.body()
// });

app.listen(PORT, () => {
    console.log(`App is starting now on ${PORT}`)
});