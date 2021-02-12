#!/usr/bin/env node

import { dataResume } from "./data-resume.mjs";

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

// console.log(dataResume)
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
// expertiseB.map(function(el){
//     console.log(el.name + " | " + el.industry)
// })
