import Card from '../Card/Card';

export default function Cards(props) {
  const { characters } = props;
   return (
   <div style={{display:"flex", justifyContent: "space-between"}}>
      {
         characters.map((char)=>{
            return <Card
               id = {char.id}
               key={char.id}
               name = {char.name}
               species = {char.species}
               gender = {char.gender}
               image = {char.image}
               onClose = {() => props.onClose(char.id)}
            />
         })
      }
   </div>);
}
/* hace un destructuring de characters que vienes a ser un array de objetos, se ubica en el componente index,js. se renderiza card pero antes se 
hace un mapeo de chracters, se renderiza as propiedades de characters
*/


