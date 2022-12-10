import Card from '../Card/Card';
//import s from '../Cards/Cards.module.css'


export default function Cards(props) {
   const { characters, onClose } = props;
  // console.log(characters);
  //  console.log(props);
   //const cards = characters.map(c => <Card />)
   return <div >
            {
              characters?.map((c, index) => (
              <Card 
                name = {c.name}
                species = {c.species}
                gender = {c.gender}
                image = {c.image}
                onClose = {() => onClose(c.id)}
                key = {index}
                id={c.id}
                detailId={c.id}
                />))
            }
          </div>;
          
}




