import express,{Express,Request,Response} from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

//* Loads all variables defined in the .env to node environment process.env
dotenv.config()

const PORT=process.env.PORT || 3000
const app:Express=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req:Request,res:Response)=>{
    res.send('<h1>Hi Express TypeScript Backend was Successful</h1>')
})

app.listen(PORT,()=>console.log(`Running on http://localhost:${PORT}`))