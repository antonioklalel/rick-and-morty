
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import Card from "../Card/Card"


function Favorites(props){
    const dispach = useDispatch()

    const handlerOrder =(event)=>{
        dispach(orderCards(event.target.value))
    }
    const handlerFilter = (event)=>{
        dispach(filterCards(event.target.value))
    }
    return(
        <div>                                                                           
            <div>
             <select  onChange={handlerOrder}>
                <option value="order" disabled="disabled">Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>

             </select>
             <select  onChange={handlerFilter}>
             <option value="filter" disabled="disabled">Filter By</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
             </select>
           
            </div>

            {
                props.myFavorites.map((fav)=>{
                    return(
                        <Card
                            key={fav.id}
                            name = {fav.name}
                            id = {fav.id}
                            species = {fav.species}
                            gender = {fav.gender}
                            image = {fav.image}
                        />
                    )
                })
            }
        </div>
    )
}
export const  mapStateToProps =(state) =>{
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null) (Favorites)