import {useState, useEffect} from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import {projectFirestore} from "../firebase/config";


const Recipe = () => {


    const location = useNavigate()


    const [title, setTitle] = useState("");
    const [curentIngredient, setCurentIncredient] = useState("")
    const [ingredient, setIngredient] = useState([]);
    const [method, setMethod] = useState("");
    const [time, setTime] = useState("");

    



    const titleForm = (e) =>{
        setTitle(e.target.value)
    };


   

    


    
    const btn = (e) =>{
        e.preventDefault();

        const ing = curentIngredient.trim();
        setIngredient([...ingredient, ing])
        setCurentIncredient("");
    };


    const methodForm = (e) =>{
        setMethod(e.target.value)
    };


    const timeForm = (e) =>{
        setTime(e.target.value)
    };



    
    
    const submit = async (e) => {
        e.preventDefault();
        setIngredient([...ingredient, curentIngredient])
        const recipie = {
            title: title,
            ingredient: ingredient || curentIngredient,
            method: method,
            time: time
        }

        try{
            await projectFirestore.collection("recipes").add(recipie)
            location("/")


        }catch(err){
            console.log(err)

        }
        setTitle("")
        setIngredient("");
        setMethod("");
        setTime("");
        setCurentIncredient("")
    }



    return ( 

        



         <form onSubmit={submit}>
             <h2>Add a New Recipe</h2>

             <label htmlFor="title">Recipy Title</label>
             <input onChange={titleForm} type="text" value={title} id="title" />

             <label htmlFor="Ingredients">Ingredients</label>
             <input onChange={(e) => setCurentIncredient(e.target.value) } type="text" value={curentIngredient} id="Ingredients" value={curentIngredient}  />
             <button onClick={btn}>Add</button>

             <label htmlFor="method">Method</label>
             <input onChange={methodForm} value={method} type="text" id="method"/>

             <label htmlFor="time">Time</label>
             <input onChange={timeForm} value={time} type="number" id="time" />

             <button onClick>Submit</button>
         </form>
     );
}
 
export default Recipe;