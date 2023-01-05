import React, { createContext } from "react";
import { ReactDOM } from "react";
import { CreateContext,usestate } from "react";
import App from "./App";
const UserContext=createContext()
function AddNew()
{
    const[Description,setDescription]=usestate["Travel expense"];
    const[Amount,setAmount]=usestate[5000];
    return(

        <UserContext.Provider value={Description}>
            <App Description={Description}/>
        </UserContext.Provider>
    )
}