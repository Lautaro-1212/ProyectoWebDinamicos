import express from 'express';
import cors from 'cors';

const app = express()
const IP = "localhost";
const PORT = "3000";

app.use(cors())
app.use(express.json)

app.use("api/producs", producRouter)

function startHTTP(){
    app.listen(PORT, '0.0.0.0', () => {
        console.log("Server start in http://${IP}:${PORT}")
    });
}

function startServices(){
    try{
        startHTTP();
    } catch(error){
        console.log("Error", error)
    }
}

startServices()