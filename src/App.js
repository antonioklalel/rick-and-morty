import { useState, useEffect} from 'react'
import './App.css'

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import{Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form'

function App () {

   const[characters,setCharacters]=useState([]); 
   const[access, setAccess]=useState(false)

   const username = "antonio.12@henry.com"   
   const password = "123456"

   const navigate = useNavigate()

   function login(userData){
      if(userData.password === password && userData.username === username){
         setAccess(true)
         navigate('/home')
      }
   } 
   useEffect(()=>{
      !access && navigate('/');
   }, [access])      

    
   function onSearch(character) {   
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
   }

   function onClose(id){
    setCharacters(characters.filter((char)=> char.id !== id))
   }
   const location = useLocation()
   
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" &&   <Nav onSearch={onSearch}/> }
    
      <hr/>
      <Routes>
        <Route exact path='/' element={<Form login ={login}/>}> </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/home' element={
        <Cards characters={characters} onClose={onClose}/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/detail/:detailId' element={<Detail/>}></Route>
      </Routes>
     
     
    </div>
  )
}
export default App
// la funcion onSearch es una funcion que al hacer click es llamada y modifica el estado
