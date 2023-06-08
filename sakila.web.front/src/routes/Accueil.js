import Article from "../components/Article";
import Header from "../components/Header";
import { HeaderContainer, HeaderWrapper } from "../components/Header/HeaderElements";

function Accueil(props) {

    const articles = props.articles;

    function ajouterAuPanier(e, article) {
        e.preventDefault();
        props.setPanier((prevData) => {
            prevData.Articles.push(article);
            return { ...prevData, Articles: prevData.Articles }
        })
    }

    return (
        <>
            <Header />
            <div class="container">
                <h2>Nos Articles</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {articles.Articles.map((article) => (
                        <Article article={article} setPanier={props.setPanier} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Accueil;