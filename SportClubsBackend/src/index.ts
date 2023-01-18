import express from 'express'
const forgotRouter = require('./routes/forgot')

const app = express()


app.use('/api/forgot', forgotRouter)




app.listen(3000, ()=> {
    console.log("Application listening at http://localhost:3000")
})