import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
      const[character, setCharacter] = useState("");  
      const handleChange = event =>{
         const valor=event.target.value
         setCharacter(valor)
         
      }

   return (
      <div className={styles.container}>
          <input 
            type='search'
            name = 'search'
            id='search'
            onChange={handleChange}
          />
      <button onClick={()=>{props.onSearch(character)}}>Agregar</button> 
      </div>
   );
}
/*
   1.¿como funciona el estado?
      el estado recibe 2 elementos la variable y una funcion que modifica al estado, esta es igual al hooks useState(""), que indica el valor inicial
      en este caso un string vacio
   2.¿los eventos?
   handler es un escuchador de eventos, el evento es un objeto que dentro de el tiene una propiedad llamada target, y dentro de target existe la
   propiedad value, que es lo que el usuario va ingresando al imput, el onChange se ejecuta cada vez que el valor del elemento cambia, este llama
   a la funccion handleChange, entonces se llama a la funcion cada vez que se modifica el valor del imput
*/

