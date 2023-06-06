import React , {useEffect} from 'react'
import { useLocation } from "react-router-dom"; 

function Login() {
  const queryString = useLocation();
  function getUrl(){
    const query = new URLSearchParams(queryString.search)
    return query.get("nom")
  }
  
  useEffect( function(){
    getUrl()
  }, [])

  return (
    <div>Login
      <br/>
     {getUrl() === "admin" ? <p>bonjour admin</p> : <p>pas bonjour</p>}
    </div>
  )
}

export default Login