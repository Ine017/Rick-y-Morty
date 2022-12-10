import React from 'react';
import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h2> Hola! Mi nombre es Inés Ilarregui</h2>
            <h3> Te doy la bienvenida a mi app de Rick y Morty</h3>
            <p>
                Este es mi primer proyecto con React y estoy muy orgullosa de él.
                Si bien siento que es sólo un punto de partida y que aún hay muchas 
                cosas por mejorar, llegar hasta acá me costó muchísimo esfuerzo y 
                es por eso que lo valoro tanto.  
            </p>
            <p>
                Creo firmemente que con paciencia y compromiso voy a seguir creciendo
                en el maravilloso y complicado mundo de la programación. Y hacia allá
                voy, en este viaje en busca de nuevos conocimientos, intentando mejorar
                cada día un poco más.
            </p>
            <p>
                Espero disfrutes mi app tanto como la he disfrutado yo!
            </p>
        </div>
    );
}