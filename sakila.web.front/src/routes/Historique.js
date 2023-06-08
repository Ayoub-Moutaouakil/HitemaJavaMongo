import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

function Historique(props) {

    const historique = props.historique.commande;
    const articles = props.historique.articles;

    return (
        <>
            <Header />
            <div class="container">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Adresse</th>
                            <th>Commentaire</th>
                        </tr>
                    </thead>
                    {historique.map((commande) => (
                        <tbody>
                            <tr>
                                <td>{commande.nom}</td>
                                <td>{commande.email}</td>
                                <td>{commande.adresse}</td>
                                <td>{commande.commentaire}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <hr/>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    {articles.map((article) => (
                        <tbody>
                            <tr>
                                <td>{article.id}</td>
                                <td>{article.nom}</td>
                                <td>{article.description}</td>
                                <td>{article.prix}€</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
}

export default Historique;