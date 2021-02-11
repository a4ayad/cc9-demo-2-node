#!/usr/bin/env node

import { app } from "./app.mjs";

const { basics } = app;

const { basics: { name,email,about } } = app;

const { basics: { location: { city, state } } } = app;

const { basics: { profiles: { github, linkedin } } } = app;

const { basics: { education } } = app;

const { basics: { education: { institution, degree, area } } } = app;

const { basics: { work: { work0, work1, work2 } } } = app;

const { basics: { work: { work0: { summary0, company0, position0 } } } } = app;

const { basics: { work: { work1: { summary1, company1, position1 } } } } = app;

const { basics: { work: { work2: { summary2, company2, position2 } } } } = app;


console.log(`
    \n
    ${name}
    ${email}
    ${city}, ${state}
    ${github}
    ${linkedin}
    \n
    About
    =====
    ${about}

    \n
    Experience:
    ==========
    * ${position0} ${company0}
    ${summary2}
    \n
    * ${position1} ${company1}
    ${summary2}
    \n
    * ${position2} ${company2} 
    ${summary2}
    \n
    Education:
    =========
    ${institution}
    ${degree}${area}

`)

// TODO: 

// console.log(`------------------------------`)
// console.log(`Welcome to the ${appName}`)
// console.log(`------------------------------`)
// console.log(`The emerging leader in the ${industryName} industry`)
// console.log(`------------------------------`)
// console.log(`We provide expertise in the following areas:
// ${expertise1}, ${expertise2}, ${expertise3}`)