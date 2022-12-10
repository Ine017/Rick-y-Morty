import s from './SearchBar.module.css';
import {useState} from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   //const [userInput, setUserInput] = useState("");

   //console.log(props);
   const [character, setCharacter] = useState('');
   const handleChange = (e) => {
      setCharacter(e.target.value)
   }
   const clearInput = () => {
      setCharacter('');
   }
   return (
      <div className={s.main}>
         <input 
            type='search' 
            value={character}
            onChange={handleChange}
            className={s.input}
            
         />
         <button 
            className={s.btn} 
            onClick={() => {onSearch(character); clearInput()}}>Agregar</button>
      </div>
   );
}
