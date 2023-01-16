import React , {useContext} from 'react'
import { AuthContext } from '../../AuthContext';
import "./headers.css"


export const Header = () => {
  
  const authContext = useContext(AuthContext);

  function logout () {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    authContext.setAuth({});
  }


  return (
    <div>
    <header>
        <div>
         <nav>
          
          <div className='logoheaders'>
            <img src='/headers.gif' alt='headerss' />
          </div>
          
          {   authContext.auth.email ? <div>

          <div>

          <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/movies'>Movies</a>
            </li>
            <li>
                <a href='/series'>Series</a>
            </li>
            <li>
                <a href='/articles'>Articles</a>
            </li>
            <li>
            {authContext.auth.email}
            </li>
            <li>
            <button className="btn btn-danger btn-sm" onClick={logout}>logout</button>
            </li>
           
           
            
          </ul>
        
          </div>
          </div> : "you need to login" }
         </nav> 
         </div>
     </header>
    </div>
  )
}
