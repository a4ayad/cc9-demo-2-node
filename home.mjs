// export const home = {
//     home: {
//       greeting: "Hello,", 
//       message: "Welome to my resume!",
//       },
//       resume: "http://localhost:5000/ahmedResume"
//   }

const PORT = process.env.PORT || 5000

const URL = (process.env.ENV === 'development')
  ? `localhost:${PORT}`
  : 'https://a4ayad-resume.herokuapp.com'

export const home = {
    overview: 'Welcome to my Resume API. Please browse below to respective section',
    summary : `${URL}/summary"`,
    skills: `${URL}/skills`,
    education: `${URL}/education`
}