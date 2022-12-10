import React from "react";
import { connect, useDispatch } from "react-redux";
import Card  from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import FavCard from "./FavCard";

export function Favorites({myFavorites}) {
     //console.log(myFavorites);
    // o (props) y desp props.myFavorites
    const dispatch = useDispatch();

    const handleOrderChange = (e) => {
      if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
        dispatch(orderCards(e.target.value));
      } else {
        dispatch(filterCards(e.target.value));
      }
    };
  return (
    <div>
        <select id="ordenamiento" onClick={handleOrderChange}>
                <option value="Ascendente" >Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select id="genero" 
                onClick={handleOrderChange}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknown">unknown</option>
                <option value="Genderless">Genderless</option>
            </select>
          <ul>
      {/* {myFavorites?.map((char, index) => {
            <Card/>
        }): null }  */}
      {myFavorites.length? myFavorites.map((c, index) => {
            <FavCard
              name={c.name}
              species={c.species}
              gender={c.gender}
              image={c.image}
              onClose={() => onClose(c.id)}
              key={index}
              id={c.id}
            />;
          })
        : null}
        </ul>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);


