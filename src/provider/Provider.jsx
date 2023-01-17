import { v4 as uuidv4 } from 'uuid'
import { createContext } from "react"

const bbdd = {
    header : {

        menu : [
            { id : uuidv4() , title : "Inicio"         , href :"#"},
            { id : uuidv4() , title : "Películas"      , href :"#"},
            { id : uuidv4() , title : "Juegos"         , href :"#"},
            { id : uuidv4() , title : "Experiencias"   , href :"#"},
            { id : uuidv4() , title : "Objetivo"       , href :"#"},
            { id : uuidv4() , title : "Comunidad"      , href :"#"},
            { id : uuidv4() , title : "Publicación"    , href :"#"},
            { id : uuidv4() , title : "Asociaciones"   , href :"#"},
            { id : uuidv4() , title : "Nuestro equipo" , href :"#"},
        ] ,
        rrss : [
            { id : uuidv4() , title : 'Facebook'  , href : '#' , icono : 'facebook'},
            { id : uuidv4() , title : 'Twitter'   , href : '#' , icono : 'twitter'},
            { id : uuidv4() , title : 'Instagram' , href : '#' , icono : 'instagram'},
            { id : uuidv4() , title : 'Youtube'   , href : '#' , icono : 'youtube'},
        ]
    },
    hero : {
        h2 : 'Avatar el camino del agua',
        claim : 'Mira el nuevo tráiler y experimenta Avatar: El Camino del Agua en 3D el 16 de diciembre.'
        ,
        buttons : [
            { id : uuidv4() , title : 'Conseguir entradas' , href : '#'},
            { id : uuidv4() , title : 'Ver el trailer'     , href : '#'},
        ]
    }
}

export const GlobalContext = createContext()

export const Provider = ({ children }) => {
   return(
    <GlobalContext.Provider value={ bbdd }>
        { children }
    </GlobalContext.Provider>
   )
}