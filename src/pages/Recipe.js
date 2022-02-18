
const Recipe = () => {

    return ( 
         <form>
             <h2>Add a New Recipe</h2>

             <label htmlFor="title">Recipy Title</label>
             <input type="text" id="title" />

             <label htmlFor="Ingredients">Ingredients</label>
             <input type="text" id="Ingredients"/>

             <label htmlFor="method">Method</label>
             <input type="text" id="method"/>

             <label htmlFor="time">Time</label>
             <input type="number" id="time" />

             <button>Submit</button>
         </form>
     );
}
 
export default Recipe;