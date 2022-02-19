import {useState} from "react";

const Recipe = () => {



    const [title, setTitle] = useState("");
    const [curentIngredient, setCurentIncredient] = useState("")
    const [ingredient, setIngredient] = useState([]);
    const [method, setMethod] = useState("");
    const [time, setTime] = useState("")


    const titleForm = (e) =>{
        setTitle(e.target.value)
    };


    
    const ingredinetsForm = (e) =>{
        setCurentIncredient(e.target.value)
    };
    
    const btn = (e) =>{
        e.preventDefault();
        setIngredient([...ingredient, curentIngredient])
        setCurentIncredient("")
    };


    const methodForm = (e) =>{
        setMethod(e.target.value)
    };


    const timeForm = (e) =>{
        setTime(e.target.value)
    };



    
    
    const submit = (e) => {
        e.preventDefault();
        const recipie = {
            title: title,
            ingredient: ingredient,
            method: method,
            time: time
        }
    
    
        console.log(recipie)
    }



    return ( 

        



         <form onSubmit={submit}>
             <h2>Add a New Recipe</h2>

             <label htmlFor="title">Recipy Title</label>
             <input onChange={titleForm} type="text" id="title" />

             <label htmlFor="Ingredients">Ingredients</label>
             <input onChange={ingredinetsForm} type="text" id="Ingredients" value={curentIngredient}  />
             <button onClick={btn}>Add</button>

             <label htmlFor="method">Method</label>
             <input onChange={methodForm} type="text" id="method"/>

             <label htmlFor="time">Time</label>
             <input onChange={timeForm} type="number" id="time" />

             <button>Submit</button>
         </form>
     );
}
 
export default Recipe;