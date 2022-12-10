import s from './Card.module.css';
import { Link } from 'react-router-dom';
import {addFavorite, deleteFavorite} from '../../redux/actions';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

export function Card(props) {
   //console.log(props);
   // const isFav = {
   //    isFav: false
   // };

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id){
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id)
      } 
      else{
         setIsFav(true);
         props.addFavorite(props)
      }
   }


   return (
      <div className={s.card}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button onClick={props.onClose}>X</button>
         <div >
            <Link to={`/detail/${props.id}`}>
               {/* por qué tienen detailId acá? */}
               <h2 >{props.name}</h2>
               <img src={props.image} alt={props.name} />
               <h2 >{props.species}</h2>
               <h2 >{props.gender}</h2>
            </Link>
         </div>
      </div>
   );
}
export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function (id) {
       dispatch(addFavorite(id));
     },
      deleteFavorite: function (id) {
         dispatch(deleteFavorite(id));
      }
   };
 }
 export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Card);



// className={s.img}
// className={s.btn}
// className={s.container}
// className={s.h2}
// className={s.h2}
// className={s.h2}