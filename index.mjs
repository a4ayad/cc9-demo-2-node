#!/usr/bin/env node

import { app } from "./app.mjs";

// One usage could be to run AR work from the current project
// import { app as EbApp} from 'intro-node';
// const { details: { firstName } } = EbApp

// let name = "my name"
// let { .... { name } } = app
//Grab details from app
// detail definition/declaration
const { details } = app;
const { details: { education } } = app;
const { details: { firstName, lastName, email } } = app;
const { details: { education: { name } } } = app;

// details call: get firstName via details
// const { details : { firstName } } = app;

// destruct the object by hierarchy

console.log(`
    \n
    ---------
    FName: ${firstName} \n
    LName: ${lastName} \n
    Email: ${email}

`)
// console.log('App: ',     app    )
// console.log('Details: ', details)
// console.log('FN props: ', firstName)

// console.log(education)
// console.log(name)
// this is tedious
// console.log(app.details.education.type)

// const { profile: { industryName, appName } } = app
// const { expertiseA: {expertise1, expertise2, expertise3} } = app
// // const { expertiseB: {}}

// console.log(`------------------------------`)
// console.log(`Welcome to the ${appName}`)
// console.log(`------------------------------`)
// console.log(`The emerging leader in the ${industryName} industry`)
// console.log(`------------------------------`)
// console.log(`We provide expertise in the following areas:
// ${expertise1}, ${expertise2}, ${expertise3}`)