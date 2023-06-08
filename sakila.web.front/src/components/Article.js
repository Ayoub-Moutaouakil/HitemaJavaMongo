function Article(props) {

    function ajouterAuPanier(e, article) {
        e.preventDefault();
        props.setPanier((prevData) => {
            prevData.Articles.push(article);
            return { ...prevData, Articles: prevData.Articles }
        })
    }

    return (
        <div class="col">
            <div class="card shadow p-3 mb-5 bg-white rounded">
                <img class="article-image" src={props.article.image}/>
                <div class="card-body">
                    <h4>{props.article.nom}</h4>
                    <p class="card-text">{props.article.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button
                                href="#"
                                onClick={(e) => ajouterAuPanier(e, props.article)}
                                className="btn btn-primary"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                        <small class="text-muted">{props.article.prix}€</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;