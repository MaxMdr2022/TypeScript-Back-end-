import express from "express"

import diaryRoutes from "./routes/diaries"

// instalamos las cors para poder usar este back como API para el proyecto de front-end con TS subscriptores. 
// Al instalarlo tiro un error donde decia que faltaban los type de cors y que se pruebe con hacer npm i --save-dev @types/cors
import cors from "cors"  

const app = express();

app.use(express.json())  // middleware que transforma la req.body en json

const PORT = 3001


// 'req' is declared but its value is never read. Esto es por el "noUnusedParameters". Entonces el "_" sirver para ignorar el parametro que no va a usar. 
app.get("/", (_req, res) =>{  

    console.log("Servidor ON.")
    res.send("Hola Mundo!")
});


app.use(cors())
app.use("/api/diaries", diaryRoutes)


app.listen(PORT, ()=>{

    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
