import { createContext, useState, useReducer } from "react";



export const ThemeColor = createContext();


const themeReducer = (state, action) =>{
    switch (action.type){
        case "CHANGE_COLOR":
          return {...state, color: action.payload}

        case "DARK_MODE":
            return {...state, dark: action.payload}

        default: 
           return state
    }
}

const ThemeProvider  = (props) => {

    const [state, dispatch] = useReducer(themeReducer, {
        color: "blue",

        dark: {background: "white", color: "black"},
        
    })


    const changeColor = (color) =>{
        dispatch({type: "CHANGE_COLOR", payload: color})
    }

    const darkMode = (mode) =>{
        dispatch({type: "DARK_MODE", payload: mode})
    }






    return ( 
        <ThemeColor.Provider value={{...state, changeColor, darkMode}}>
            {props.children}
        </ThemeColor.Provider>
     );
}
 
export default ThemeProvider;