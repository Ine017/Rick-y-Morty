import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Detail() {
  const {detailId} = useParams();
  const [character, setCharacter] = useState({})
  const navigate = useNavigate();
 // console.log(character);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);

 const handleClick = () => {
   navigate('/home')
 }

  return (
    <div> {character ? 
      <div>
        <div> 
            <h1>Name: {character.name}</h1>
            <h5>Status: {character.status}</h5>
            <h5>Specie: {character.species}</h5>
            <h5>Gender: {character.gender}</h5>
            <h5>Origin: {character.origin?.name}</h5>
         </div>
         <div>
            <img src={character.image} alt={character.name}/>
         </div>
      </div> : ''}
      <button onClick={handleClick}>Back to home</button>
    </div>
  )
}
