import diaryData from "./diaries.json" // importamos el json (API)
import { DiaryEntry, DiaryEntrySinComentarios, NewDiaryEntry, SubsEntry } from "../types" // importamos los tipos de datos de types.d.ts

import subsData from "./subsApi.json"

// le indicamos que diaries va a ser un arreglo con objetos que van a contener como tipos de datos, los de DiaryEntry. 
// Y esos datos los va a tomar de la API (diaryData) 
// con "as Array<DiaryEntry>" le decimos que a diaryData lo tiene que tratar como un DiaryEntry, Por que sino no toma como tipo de dato
// al Weather y a Visibility. Y le asigna como tipo de dato string.
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>


// funcion para traer las diary
export const getEntries = (): DiaryEntry[] => diaries


// funcion para agregar diary. Como parametro recibe de la ruta un objeto {date, weather, visibility, comment} que esta tipado 
// con el type newDiaryEntry. Y esta funcion, addDiary devueve un objeto tipado con DiaryEntry
export const addDiary = (newDiaryEntry : NewDiaryEntry): DiaryEntry =>{

    const newDiary = {

        id: Math.max( ...diaries.map(e => e.id)) + 1,   // tomamos el id mas alto del arreglo y le sumamos 1 para darle ese valor al nuevo id
        ...newDiaryEntry
    }

    diaries.push(newDiary)

    return newDiary
}


// funcion que traiga las diaries de la api pero sin los comentarios

// NOTA: Si bien nosotros le indicamos a TS que no queremos la propiedad comment, y TS la quita como tipo de dato. Cuando corremos el 
// codigo esa propiedad sigue estando. Por eso tenemos que hacer un map en diaries (API) para quitar esa propiedad. 
export const getEntriesSinComentarios = (): Array<DiaryEntrySinComentarios> => {

    return diaries.map(({id, date, weather, visibility}) => {
        
        return {id, date, weather, visibility }
    })
}


// funcion para encontrar una entrada en concreto:

// esta funcion va a recibir un id del tipo number y va a retornar un DiaryEntrySinComentarios, que si vamos al archivo type vemos que es un objeto
// con propiedades que cada una tiene su type. O lo otro que puede retornar es undefined, en caso de ingresar un id que no este en la
// API. Esto lo que hace es que despues tengamos que usar muchos ifs para no caer en undefined. 

export const findById = (id :number): DiaryEntrySinComentarios | undefined => {

    const entry = diaries.find(e => e.id === id)

    if (entry){

        // quitamos la propiedad comment y retornamos el resto del diary:
        const {comment, ...restOfDiary  } = entry 

        return restOfDiary
    }
    // si lo dejamos hasta ahi tira el siguiente error: Not all code paths return a value.
    // eso es por tsconfig donde pusimos que los returns tiene que ser implicitos. si o si tenemos que retornar algo y como aca retornamos
    // el DiaryEntrySinComentarios | undefined. Faltaria el undefined

    return undefined
}


// -------------------------PROYECTO FRONT-END TS----------------------------------------------------

// Aprovenchando este back creo una ruta para utilizar en el proyeto de subscrioptores 

const subs: Array<SubsEntry> = subsData as Array<SubsEntry>


// funcion para traer las diary
export const getSubs = (): SubsEntry[] => subs