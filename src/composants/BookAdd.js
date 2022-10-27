import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookAdd(props){
  const [livre, setLivre] = useState({
    id : props.newId,
    titre : "",
    auteur : "",
    prix : ""
  })
  const navigate = useNavigate();


  const ajoutLivre = (event)=>{
    event.preventDefault();
    props.ajoutLivreRef(livre);
    navigate('/books')
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