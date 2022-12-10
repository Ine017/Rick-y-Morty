import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import s from '../Navbar/Nav'
import {Link} from 'react-router-dom'

export default function Nav({onSearch}) {
  //console.log(onSearch);
  return (
    <div className={s.navbar}>
        <SearchBar
            onSearch={onSearch}    
        />
        <Link to='/home'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/favorites'>Favorites</Link>
        <br/>
    </div>
  )
}


// NavLink no estaba mal, servía también