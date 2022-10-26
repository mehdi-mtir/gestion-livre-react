import './App.css';
import {useState} from "react";
import BookList from './composants/BookList';
import BookAdd from './composants/BookAdd';

function App() {
  const [livres, setLivres] = useState([
      {id : 1, titre : "The slight edge", auteur : "jeff Olsen", prix : 12.50},
      {id : 2, titre : "Power of habits", auteur : "Charles Duhigg", prix : 18.00},
      {id : 3, titre : "Atomic habits", auteur : "James Clear", prix : 20.00}
    ]);
  const [action, setAction] = useState("");

  const ajoutLivre = (livre)=>{
    setLivres([...livres, livre]);
    setAction('');
  }
  
  return (
    <div className="container">
      <h1>Gestion des livres</h1>
      <button class="btn btn-success" id="btnAjout" onClick={()=>setAction('add')}>Ajouter un livre</button>

      <BookList livres={livres} />
      {
        action==='add'?<BookAdd ajoutLivreRef={ajoutLivre} newId={livres[livres.length-1].id + 1}/>:""
      }
    </div>
    
  );
}

export default App;
