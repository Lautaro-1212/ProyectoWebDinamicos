import express from 'express';
import cors from 'cors';
import { startBDD } from './database/schema.js';
import productRouter from './controller/productsController.js'

const app = express()
const IP = "localhost";
const PORT = "3000";

app.use(cors())
app.use(express.json())

app.use("/api/products", productRouter)

function startHTTP(){
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server start in http://${IP}:${PORT}`)
    });
}

function startServices(){
    try{
        startBDD();
        startHTTP();
    } catch(error){
        console.log("Error", error)
    }
}

startServices()