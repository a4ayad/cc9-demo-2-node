import { app } from "./app.mjs";

//Grab details from app
const { details } = app ;
const { details : { firstName } } = app;

console.log('App: ',     app    )
console.log('Details: ', details)
console.log('FN props: ', firstName)

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