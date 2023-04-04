// Este archivo vendria a ser el middleware para controlar el tipo de dato de la data que se ingresa por body 
// Ya que si tomamos sin controlar los datos del body, de nada va a servir crear types o interface, porque no va a haber control 
// del tipo de dato.


import { NewDiaryEntry  } from "./types";
import {Visibility, Weather} from "./enums"



// esta funcion es para verificar si lo que se ingresa por parametro es un string.
const isString = (string : string) : boolean => {

    return typeof string === "string"
}


// Tenemos que validar la info que ingrese por body

const parseComment = (commentFromRequest: any): string => {

    // lo que tenemos que chequear es si el comment que ingresa por la req es un string, porque si no es estring es donde tenemos que hacer algo

    if( !isString(commentFromRequest) ){

        throw new Error("Comentario incorrecto")  // esto va a entrar al catch de la ruta
    }

    return commentFromRequest
}

// -----------------------------------------------------------------------------------------------------------


// Lo mismo que la funcion de arriba pero para parsear la fecha
const isDate = (date: string): boolean => {

    return Boolean(Date.parse(date)) // si el date es una fecha va a retornar true
}



// funcion para validar el date:
const parseDate = (date: any): string => {

    if( !isDate(date)){

        throw new Error("Fecha incorrecta")
    }

    return date
}


//--------------------------------------------------------------------------------------------------------------------------

//parse para controlar el weather: 

const isWeather = (weather: any): boolean => {

    return Object.values(Weather).includes(weather)  // del enum Weather buscamos el weather que nos pasen por body y devolvemos un boolean
}


//funcion para validar weather

const parseWeather = (weatherFromRequest: any): Weather => {

    if( !isString(weatherFromRequest) || !isWeather(weatherFromRequest)){

        throw new Error("El clima ingresado no es correcto.")
    }

    return weatherFromRequest
}

//----------------------------------------------------------------------------------------------------------------------------

const isVisibility = (visivility: any): boolean => {

    return Object.values(Visibility).includes(visivility)
}


const parseVisibility = (visibilityFromRequest: any): Visibility => {

    if( !isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){

        throw new Error("visibilidad ingresada es incorrecta.")
    }

    return visibilityFromRequest
}


///----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------


// Esta funcion va a recibir el req.body y va a devolver un objeto con el tipo NewDiaryEntry

const toNewDiaryEntry = (object : any): NewDiaryEntry =>{

    const newEntry: NewDiaryEntry = {

        comment: parseComment(object.comment),   // le pasamos el comentario a la funcion parseComment y ahi chequea si esta ok
        date: parseDate( object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry

}




export default toNewDiaryEntry;