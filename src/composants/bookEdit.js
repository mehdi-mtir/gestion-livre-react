import { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function BookEdit(props){
  const {id} = useParams();
  const [livre, setLivre] = useState(props.livres.find(livre=>livre.id === +id));
  //console.log(id);
  //console.table(props.livres);
  console.log(livre);
  const navigate = useNavigate();


  const editLivre = (event)=>{
    event.preventDefault();
    props.editLivreRef(livre);
    navigate('/books')
  }

  const onInputChange = ({target})=>{
    setLivre({...livre, [target.name] : target.value})
  }



  return <div id="edit">
  <h1>Editer le livre {livre.titre}</h1>
  <form onSubmit={(event)=>editLivre(event)}>
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

export default BookEdit;