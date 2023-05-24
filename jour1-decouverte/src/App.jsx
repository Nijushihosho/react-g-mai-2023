// sélectionner tout le contenu du fichier App.jsx
// supprimer tout 
// à la place du code précédent 
// je viens de créer un composant 
// dans un composant vous avez 2 parties principales 
// 1ère partie fonction javascript classique 
// nom de la fonction 1ère lettre en Majuscule 
// () 
// {}
// dans les accolades le minimum return 
// juste après le return <div>Bonjour</div>
// <div>Bonjour</div> ce n'est pas du html  
// ce n'est pas une string javascript 
// c'est jsx => combinaison de html javascript et xml 

// 2ème et dernière partie le composant si je veux pouvoir l'utiliser dans un autre fichier .jsx 
// je dois l'exporter 
import "bootstrap/dist/css/bootstrap.min.css"; // ajouter la librairie dans votre projet react
import Premier from "./composants/Premier";
import Deuxieme from "./composants/Deuxieme";
import Troisieme from "./composants/Troisieme";
import Quatrieme from "./composants/Quatrieme";
import Cinquieme from "./composants/Cinquieme";
import Sixieme from "./composants/Sixieme";
import Septieme from "./composants/Septieme";
import Event from "./composants/Event";
import EventSuite from "./composants/EventSuite";
import Compteur from "./composants/Compteur";

function App(){
    return <div className="row">
        <section className="col-4">
          <Compteur />
          <Compteur /> {/** chaque composant dispose d'un state qui est autonome par rapport aux autres composants 
           * et est modifié tout seul / sans impacter les autres composants Compteur
           * vous êtes en train d'utiliser le Virtual DOM 
           * https://www.youtube.com/watch?v=V8G0ILBE-Ok&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=2
           */}
          <Compteur />
          <Compteur />
          <Compteur />
          <Compteur />
          <Compteur />
          <Compteur />
        </section>
        <section className="col-4">
          Bonjour
        </section>
        <section className="col-4">
          <Premier /> {/** Premier() */}
        </section>
        <section className="col-4">
          <Deuxieme />
        </section>
        <section className="col-4">
          <Troisieme />
        </section>
        <section className="col-4">
          <Quatrieme />
        </section>
        <section className="col-4">
          <Cinquieme />
        </section>
        <section className="col-4">
          <Sixieme />
        </section>
        <section className="col-4">
          <Septieme />
        </section>
        <section className="col-4">
          <Event />
        </section>
        <section className="col-4">
          <EventSuite />
        </section>
    </div> 
}

export default App ; 
// commentaire js
// <!-- --> commentaire en html
// {/** */ } commentaire en jsx 
// toutes les notes de cours sont sur github.com
// https://github.com/webdevproformation/react-g-mai-2023
// si vous comprenez html css et javascript => react 


