import './App.css';
import {useEffect, useState} from "react";
import BookList from './composants/BookList';
import BookAdd from './composants/BookAdd';
import BookEdit from './composants/bookEdit';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {

  /*const ajoutLivre = (livre)=>{
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
  }*/
  
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
        <Route path='/' exact element={<Navigate to="/books" replace/> }/>
        <Route path='/books' exact element={<BookList />} />
        <Route path='/books/add' exact element={<BookAdd />}/>
        <Route path='/books/edit/:id' element={<BookEdit />}/>
      </Routes>

      
    </div>
    
  );
}

export default App;
