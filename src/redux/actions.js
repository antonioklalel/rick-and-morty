import { ADD_LIST, DELETE_LIST, FILTER, ORDER } from "./types";


export function addList (person){
    return{type:ADD_LIST, payload:person}
}

export function deleteList(id){
    return{type:DELETE_LIST, payload:id}
}
export function filterCards(gender){
    return{type:FILTER , payload: gender}
}
export function orderCards(id){
    return{type: ORDER, payload:id}
}