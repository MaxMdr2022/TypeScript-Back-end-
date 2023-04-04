import express from "express"

import diaryRoutes from "./routes/diaries"


const app = express();

app.use(express.json())  // middleware que transforma la req.body en json

const PORT = 3000


// 'req' is declared but its value is never read. Esto es por el "noUnusedParameters". Entonces el "_" sirver para ignorar el parametro que no va a usar. 
app.get("/", (_req, res) =>{  

    console.log("Servidor ON.")
    res.send("Hola Mundo!")
});


app.use("/api/diaries", diaryRoutes)


app.listen(PORT, ()=>{

    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
