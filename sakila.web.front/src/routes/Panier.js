import { Link, Outlet } from "react-router-dom";
import { useState} from 'react';
import Header from "../components/Header"
import EmptyCart from "../assets/images/empty-cart.png"

function Panier(props) {

    const [panier, setPanier] = useState(props.panier.Articles);
    const [form, setForm] = useState({
        nom: "",
        email: "",
        adresse: "",
        commentaire: "",
    });

    function handleChange(e) {
        // récupérer la valeur saisie en fonction du champ
        console.log(e.target.name);
        console.log(e.target.value);
        const { name, value } = e.target;
        // exécuter un setForm => mise à jour du state => relancer un render
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault(); //  bloquer le rechargement de page
        const { nom, email, adresse, commentaire } = form;
        if (
            nom.length > 0 &&
            email.length > 0 &&
            adresse.length > 0 &&
            commentaire.length > 0
        ) {
            props.setHistorique((prevData) => {
                prevData.commande.push({ nom, email, adresse, commentaire });
                prevData.articles.push(panier);
                console.log(prevData.articles);
                return { ...prevData, commande: prevData.commande, articles: prevData.articles }
            })
            setForm({ nom: "", email: "", adresse: "", commentaire: "" }); // vider le formulaire
        } else {
            alert("veuillez compléter les champs ");
        }
    }

    function viderPanier(e) {
        props.setPanier({
            Articles : [
            ]
          });
        setPanier(props.panier.Articles);
    }

    return (
        <>
            <Header />
            <div class="container">
                <h2>Votre Panier</h2>
                {panier.length > 0 ?
                    <>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Prix</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            panier.map((article) => (
                                <tbody>
                                    <tr>
                                        <td>{article.id}</td>
                                        <td>{article.nom}</td>
                                        <td>{article.description}</td>
                                        <td>{article.prix}€</td>
                                        <td>
                                            <button href="#" onClick={console.log("Hello World")} className="btn btn-danger">Supprimer</button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}

                    </table>
                    <button href="#" onClick={(e) => viderPanier(e)} className="btn btn-danger">Vider l'intégralité du panier</button>
                    <p>(Il faut appuier deux fois sur le bouton)</p>
                    </>

                    :
                    <div class="emptycart">
                        <img src={EmptyCart} class="emptycart-image" />
                        <h3>Votre Panier est vide</h3>
                        <p>Vous pouvez le remplir en ajoutant des articles depuis l'accueil</p>
                    </div>
                }
                <hr/>
                <div className="col-sm-17">
                    <h2>Vos Informations</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control my-3"
                            name="nom"
                            value={form.nom}
                            placeholder="Nom"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control my-3"
                            name="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control my-3"
                            name="adresse"
                            value={form.adresse}
                            placeholder="Adresse"
                            onChange={handleChange}
                        />
                        <textarea
                            id=""
                            cols="30"
                            rows="5"
                            className="form-control my-3"
                            name="commentaire"
                            onChange={handleChange}
                            value={form.commentaire}
                            placeholder="Commentaire"
                        ></textarea>
                        <input type="submit" className="btn btn-warning" value="Commander" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Panier;