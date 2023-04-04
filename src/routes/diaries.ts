import express from "express";
import * as diaryServices from "../services/diaryServices" // importamos todas las funciones ( los controllers)
import toNewDiaryEntry from "../utils";


const router = express.Router();


router.get("/", (_req,res)=>{

    res.send(diaryServices.getEntriesSinComentarios())
});

router.post("/", (req,res)=>{

    try {
        
        const newDiaryEntry = toNewDiaryEntry(req.body) 
        
        const addedDiaryEntry= diaryServices.addDiary( newDiaryEntry )
    
        res.json(addedDiaryEntry)

    } catch (error) {
        
        // console.log("a verrrrrrrr")


        // result = e.message; // error under useUnknownInCatchVariables 
        if (typeof error === "string") {
            res.send(error.toUpperCase()) // works, `e` narrowed to string

        } else if (error instanceof Error) {
           res.send( error.message) // works, `e` narrowed to Error
        }
    }


});

router.get("/:id", (req,res) => {

    // utilizamos la funcion findById que creamos en controllers para buscar por el id recibido por params

    // const diary = diaryServices.findById(req.params.id) // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

    // Lo que sucede es que el id que viene por params es un string y en la funcion findById pusimos que el parametro id es del type number
    // Para eso usamos el metodo Number() o ponemos un + delante de req :const diary = diaryServices.findById( +req.params.id)

    const diary = diaryServices.findById(Number(req.params.id))


    // Si queremos devolver alguna propiedad en concreto nos va a saltar error porque pordia ser undefined  
    // res.send(diary.date) // ERROR: 'diary' is possibly 'undefined'.

    // Para evitar eso se usa un if o un operador ternario :  res.send(diary?.date)

    if(diary){ 

        // console.log("a ver"); 
        res.status(200).send(diary)
    
    }else{
        
        res.status(404).send("Error no hay Diary con ese id")
    }

});

export default router
