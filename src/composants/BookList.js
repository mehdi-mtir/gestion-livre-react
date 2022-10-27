import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'

function BookList(props){
    //initialiser la variable d'état
    const [livres, setLivres] = useState([]);
    const navigate = useNavigate(); 
    //Charger les données à partir du serveur.
    //useEffect sera exécuté par défaut pour chaque nouveau render
    //Ajouter un deuxième paramètres permet d'indiquer quels renders seront traintés
    useEffect(
      ()=>{
        async function chargerLivres(){
          //console.log("chargement...");
          const reponse = await fetch("http://localhost:3000/books"); //Lance la requête vers le serveur et j'attend la réception du résultat
          const resultat = await reponse.json(); //convertit le résultat en objet Js
          //console.log(resultat);
          setLivres(resultat); //Utiliser les données récupérées pour initialiser notre variable d'état
        }
        chargerLivres();
        //console.log("Chargement du composant");
      }
    , []); //Ajouter un tableau vide permet de détecter uniquement le premier render

    const supprimerLivre = (id)=>{
      if(window.confirm("Êtes-vous sûre de vouloir supprimer le livre")){
        const requestOptions = {
          method : 'DELETE',
        }
        //Lancer la requête d'insertion vers le serveur
        fetch("http://localhost:3000/books/"+id, requestOptions)
        .then(reponse => 
          setLivres(livres.filter(
            livre => livre.id !== id
          ))
          );
      } 
    }

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
            livres.map(
              livre => <tr key={livre.id}>
                      <th scope="row">{livre.id}</th>
                      <td>{livre.titre}</td>
                      <td>{livre.auteur}</td>
                      <td>{livre.prix}</td>
                      <td><Link className='btn btn-primary' to={'/books/edit/'+livre.id}  >Editer</Link></td>
                      <td><button className='btn btn-danger' onClick={()=>supprimerLivre(livre.id)} >Supprimer</button></td>
                  </tr>
                )
          }
        </tbody>
      </table>
    </div>
  )

}

export default BookList;