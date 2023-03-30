import { ADD_LIST, DELETE_LIST, FILTER, ORDER } from "./types"
const initialState={
    myFavorites:[],
    allCharacters :[]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_LIST:
            return{
                ...state,
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload]
            }
        case DELETE_LIST:
            const filteredList = state.myFavorites.filter((person) => person.id !== action.payload)

            return{
                ...state,
                myFavorites:filteredList
            }
        case FILTER:
            
            const allcharsFiltered = state.allCharacters.filter((char)=> char.gender === action.payload)
            return{
                ...state,
                myFavorites: allcharsFiltered
            }
        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === "Ascendente" ? state.allCharacters.sort((a,b)=>a.id -b.id) : state.allCharacters.sort((a,b)=>b.id -a.id)
            }
        default:
            return{...state}
    }
}
export default reducer