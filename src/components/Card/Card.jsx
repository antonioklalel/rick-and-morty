import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import  * as actions  from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
   const[isFav, setIsFav]=useState(false)

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         props.deleteList(props)
      }  
      if(!isFav){
         setIsFav(true)
         props.addList(props)
      }
   }
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   return (
      <div className={styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className= {styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
            <div className= {styles.dataContainer}>
               <h2>{props.name}</h2>
               <h4>{props.species}</h4>
               <h4>{props.gender}</h4>
            </div>
         <Link to ={`/detail/${props.id}`}>
            <img className={styles.image} src={props.image} alt="" />
         </Link>
          
      </div>
   );
}
export const mapDispatchToProps=(dispatch)=>{
   return{
      addList: (person)=>{dispatch(actions.addList(person))},
      deleteList: (id)=>{dispatch(actions.deleteList(id))}
   }
}
export const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }

}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

/* este componente card contiene un botton que al hacer click ejecuta la funcion
onClose, ademas renderiza las propiedades del objeto props. card es el contenedor hijo de Cards

   
*/