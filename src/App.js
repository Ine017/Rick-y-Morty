import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Navbar/Nav.jsx'
import React, {useState, useEffect} from 'react'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'



function App () {

  
  const [characters, setCharacters] = useState([]);
  // console.log(characters);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
        });
      }

  const onClose = (id) => {
    // console.log(id);
    setCharacters(characters.filter(c => c.id !== id))
  }
  
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ines@gmail.com';
  const password = '123456';
  
  const login = (userData) => {
    
    // (userData.username === username && 
    //   userData.password === password)? 
    //   setAccess(true) &&
    //   navigate('/home'): setAccess(false)
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
    else {
      alert('usuario o contraseña incorrecto')
    }
    }
  
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
    
    // style={{ padding: '25px' }}
  //console.log(location);
    return (
  
    <div className='navbar' >
      {location.pathname !== '/' && <Nav
           onSearch={onSearch}
      />}      
      <Routes>
        <Route
         path='/'
         element={<Form login={login}/>}
       />
       <Route 
         path='/home'
         element={ <Cards
             characters={characters}
             onClose={onClose}
               />}
         />
       <Route
         path='/about'
         element={<About/>}
       />
       <Route
         path={'/detail/:detailId'}
         element={<Detail/>}
       />
       <Route
         path='/favorites'
         element={<Favorites/>}
       />
      </Routes>
    </div>
    
  )
}

export default App
