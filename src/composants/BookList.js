import {Link} from 'react-router-dom';

function BookList(props){
  console.log(props.livres);
  return (

    <div id="liste">

      <h2>Liste des livres</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Prix</th>
            <th scope="col">Editer</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody id="idTbody">
          {
            props.livres.map(
              livre => <tr key={livre.id}>
                      <th scope="row">{livre.id}</th>
                      <td>{livre.titre}</td>
                      <td>{livre.auteur}</td>
                      <td>{livre.prix}</td>
                      <td><Link className='btn btn-primary' to={'/books/edit/'+livre.id}  >Editer</Link></td>
                      <td><button className='btn btn-danger' onClick={()=>props.supprimerLivreRef(livre.id)} >Supprimer</button></td>
                  </tr>
                )
          }
        </tbody>
      </table>
    </div>
  )

}

export default BookList;