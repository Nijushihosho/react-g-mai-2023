import React , {useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { LangContext } from '../context/LangContext';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import data from "../assets/labels.json"

function Menu() {
    const {isLogged , setUser} = useContext(AuthContext);
    const {lang, setLang} = useContext(LangContext); 
    const navigate = useNavigate()
    function logout(){
        signOut(auth)
        .then(() => {
            localStorage.removeItem("authentification");
            console.log('logged out');
            navigate('/');
            setUser({})
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className='menu'>
        <ul>
            <li>
                <Link to="/">{ data[lang].accueil }</Link>
            </li>
            <li>
                <Link to="/use-ref">{ data[lang].useRef } </Link>
            </li>
            {isLogged() ? 
            <li>
                <button onClick={ logout }>{ data[lang].deconnexion }</button>
            </li> 
            : 
            <li>
                <Link to="/login">{ data[lang].connexion }</Link>
            </li>}
            
        </ul>
        <ul>
            <li onClick={ function () { setLang("fr")}}>fr</li>
            <li onClick={ function () { setLang("en")}}>en</li>
        </ul>
    </div>
  )
}

export default Menu