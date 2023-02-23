import React, {useContext} from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";


const NavLinks = props =>{

   const auth = useContext(AuthContext);

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Users</NavLink>
        </li>
        {auth.isLoggedIn && (<li>
            <NavLink to={`/${auth.userId}/models`}>My Models</NavLink>
        </li>
        ) 
        }
         {auth.isLoggedIn && (
        <li>
            <NavLink to="/models/new">Add model</NavLink>
        </li>
         ) 
        }
        
         {!auth.isLoggedIn && (
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
        
        ) 
        }
        
       
        {auth.isLoggedIn && 
        <li className= "button1">
            <button onClick={auth.logout}>LOGOUT
            </button>
        </li>}
       


    </ul>

};

export default NavLinks;