import express from 'express'
const port = 3000
const app = express()

app.listen(port, ()=> {
    console.log("servidor aberto na porta localhost:"+port)
})