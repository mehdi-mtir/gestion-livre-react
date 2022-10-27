import './App.css';
import {useState} from "react";
import BookList from './composants/BookList';
import BookAdd from './composants/BookAdd';
import BookEdit from './composants/bookEdit';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  const [livres, setLivres] = useState([
      {id : 1, titre : "The slight edge", auteur : "jeff Olsen", prix : 12.50},
      {id : 2, titre : "Power of habits", auteur : "Charles Duhigg", prix : 18.00},
      {id : 3, titre : "Atomic habits", auteur : "James Clear", prix : 20.00}
    ]);
  

  const ajoutLivre = (livre)=>{
    setLivres([...livres, livre]);
  }

  const editLivre = (livre)=>{
    setLivres(
      livres.map(
        l=>{
          if(l.id === livre.id)
            return livre
          else
          return l
        }
      )
    )
  }

  const supprimerLivre = (id)=>{
    if(window.confirm("Êtes-vous sûre de vouloir supprimer le livre ?")){
      const newLivres = livres.filter(
        livre=>livre.id !== id
      );
      setLivres(newLivres);
    }
  }
  
  return (
    <div className="container">
      <h1>Gestion des livres</h1>
      <Link 
        className="btn btn-success" 
        id="btnAjout" 
        to="/books/add"
        >
          Ajouter un livre
      </Link>

      <Routes>
        <Route path='/' exact element={<Navigate to="/books" replace/>} />
        <Route path='/books' exact element={
          <BookList 
            livres={livres}
            supprimerLivreRef = {supprimerLivre}
          />
        } 
        />
        <Route path='/books/add' exact element={
          <BookAdd 
            ajoutLivreRef={ajoutLivre} 
            newId={livres[livres.length-1].id + 1}
          />
        }
        />
        <Route 
          path='/books/edit/:id' 
          element={
          <BookEdit livres={livres}
            editLivreRef = {editLivre}
          />
        }/>
      </Routes>

      
    </div>
    
  );
}

export default App;
