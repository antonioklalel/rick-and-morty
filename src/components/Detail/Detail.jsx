
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function Detail(props){
    const {detailId}=useParams();
   
    const[character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return(
        <div>
            <Link to="/home"> <button>Back</button></Link>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h2>{character.status}</h2>
            <h3>{character.specie}</h3>
            <h4>{character.gender}</h4>
            {character.origin && <h3>{character.origin.name}</h3>}
            
        </div>
    )
}