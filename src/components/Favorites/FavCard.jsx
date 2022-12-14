import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function FavCard({myFavorites, deleteFavorite, addFavorite}) {
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite(){ 
      if(isFav){
         setIsFav(false);
         deleteFavorite(props.id);
      }
      else {
         setIsFav(true);
         addFavorite(props);
      }
   }
   return (
      <div className={styles.card}>
         <div style={{display: "flex", justifyContent: "center", margin: "4%", height: "20%"}}>

            {/* ------ BOTON MORTY CORAZON ------ */}
            {isFav ? (<button onClick={handleFavorite} className={styles.xbutton}>
               <img className={styles.hvr_buzz} src={MortyBlanco} alt="1" border="0" style={{height: "30%"}}/>
               </button>) 
               : (
               <button onClick={handleFavorite} className={styles.xbutton}>
                <img className={styles.hvr_buzz} src={MortyRojo} alt="2" border="0" style={{height: "150%"}}/>
               </button>)}

            {/* ------ BOTON PEPINILLO RICK ------ */}
            {/* <button className={styles.xbutton} onClick={props.onClick}  >  onClick={ () => props.onClose(props.id)}
               <img  src={PepinilloRick} alt={props.name} />
            </button> */}
            
         </div> 
         {/* ------ IMG CHARACTER ------ */}
         <img  src={props.image} alt={props.name}></img>
         {/* <h6>{props.id}</h6> */}
         
         {/* ------ NOM CHARACTER ------ */}
         {/* <Link to={`/detail/${props.id}`}> */}
         <Link to={`/detail/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <button className={styles.subtitle} 
               style={{ backgroundColor: "green", borderRadius: "25px", color: "white"}}>
               {props.name}</button>
         </Link>
         {/* </Link> */}
         {/* <h2 className={styles.subtitle}>{props.species}</h2>
         <h2 className={styles.subtitle}>{props.gender}</h2> */}
          
      </div>
   );
}
export function mapDispatchToProps(dispatch){
   return {
      addFavorite: (id) => { dispatch(addFavorite(id)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(FavCard)
