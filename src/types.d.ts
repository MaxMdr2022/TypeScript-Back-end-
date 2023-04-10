/* Este fichero es el que utiliza TS por defecto para buscar los tipos de datos implicitos que vayamos creando. En 
el package.json se podria modificar el nombre (type.d.ts) para que lo busque con otro nombre. Por defecto es type.d.ts.

se pueden tener mas ficheros importando tipos de otros. 
*/ 

// Creamos un tipo de dato "Weather" ya que vamos a querer que solo se puedan agregar solo unos tipos de clima. 
// Por default TS lo tomaba como string, pero un string puede ser cualquier cosa y nosotros queremos que en weather
// solo se agregue el clima. 

// export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "storny"

// export type Visibility = "great" | "good" | "ok" | "poor"


// Tambien podemos usar los tipos de datos enum para una estructura con los valores y tipo de un objeto o un arreglo
//IR AL ARCHIVO ENUMS.TS




//  ahora creamos una interface para indicarle a TS que tipos de datos queremos que maneje el objeto DiaryEntry.

// como creamos tipos de datos en vez de que weather sea del tipo string le colocamos como tipo de dato Weather, que va a contener
// como tipo de dato "sunny" | "rainy" | "cloudy" | "windy" | "storny". Solo eso se va a poder introducir en la propiedad weather

export interface DiaryEntry {

    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}


// Utilizando un tipo de utilidad creamos una interface a partir de DiaryEntry

// -------Tipo de utilidad pick:--------- 

// al tipo Pick le indicamos el tipo de propiedad que nos interesa de la otra interface. En este caso la unica que no queremos es comment

// export type DiaryEntrySinComentarios = Pick <DiaryEntry, "id" | "date" | "weather" | "visibility" > 


// --------Tipo de utilidad Omit: --------

// Funciona igual que pick pero en vez de indicar que propiedades queremos, le decimos que propiedades queremos omitir: 

export type DiaryEntrySinComentarios = Omit <DiaryEntry, "comment" > 


export type NewDiaryEntry = Omit <DiaryEntry, "id" >


// ------------------------------PROYECTO FORNT-END SUBS-------------------------------------------------------

export interface SubsEntry {

    nick: string,
    month: number,
    profileURL: string,
    description: string
}