import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookAdd(props){
  const [livre, setLivre] = useState({
    titre : "",
    auteur : "",
    prix : ""
  })
  const navigate = useNavigate();

  const ajoutLivre = (event)=>{
    event.preventDefault();
    //Préparer les option à passer à la méthode Fetch : methode Post + format des données + données formatées
    const requestOptions = {
      method : 'POST',
      headers : {'content-type': 'application/json'},
      body : JSON.stringify(livre)
    }
    //Lancer la requête d'insertion vers le serveur
    fetch("http://localhost:3000/books", requestOptions)
    .then(reponse => navigate('/books')); //Si l'insertion est faite avec succès, je redirige l'utilisateur vers la liste
  }

  const onInputChange = ({target})=>{
    setLivre({...livre, [target.name] : target.value})
  }

  return <div id="ajout">
  <h1>Ajouter un nouveau livre</h1>
  <form onSubmit={(event)=>ajoutLivre(event)}>
    <div className="mb-3">
      <label htmlFor="titre" className="form-label">Titre</label>
      <input type="text" className="form-control" id="titre" name="titre" value={livre.titre} onChange={(event)=>onInputChange(event)} />
    </div>
    <div className="mb-3">
      <label htmlFor="auteur" className="form-label">Auteur</label>
      <input type="text" className="form-control" id="auteur" name="auteur" value={livre.auteur} onChange={(event)=>onInputChange(event)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="prix" className="form-label">Prix</label>
      <input type="text" className="form-control" id="prix" name="prix" value={livre.prix} onChange={(event)=>onInputChange(event)}/>
    </div>
    <button type="submit" className="btn btn-primary">Valider</button>
  </form>
</div>
}

export default BookAdd;