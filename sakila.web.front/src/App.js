import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Panier from './routes/Panier';
import Historique from './routes/Historique';
import Accueil from './routes/Accueil';
import { useState } from 'react';
import { getArticles } from "./assets/data/Articles"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [panier, setPanier] = useState({
    Articles : [
    ]
  });

  const [articles, setArticles] = useState(getArticles);

  const [historique, setHistorique] = useState({
    commande : [
    ],
    articles : [
    ]
  })

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil articles={articles} setPanier={setPanier}/>} />
        <Route path="panier" element={<Panier panier={panier} setPanier={setPanier} setHistorique={setHistorique}/>} />
        <Route path="historique" element={<Historique historique={historique}/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
