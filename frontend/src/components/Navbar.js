import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Toggle from './useToggle';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Navbar = () => {
    const {logout}  = useLogout()
    const {user} = useAuthContext()  
    const { theme } = useContext(ThemeContext);

    const handleClick = () =>{
      logout()
    }

  return (
    <header >
      <div className="container " >
        <Link className='header' to="/">
          <h1>Workout Mate</h1>
        </Link>

        <nav>
        <Toggle toggleTheme={theme}/>
          { user && (<div style={{display:'flex', flexDirection:'row'}}>
            <span style={{padding: "20px"}}>Welcome {user.email.substring(0, user.email.indexOf('@'))}</span>
            <button onClick={handleClick}>
              Log out
            </button>
          </div>
          )}
          {!user && (
        <div>
        <Link className="Nav-item header" to="/login">Login</Link>
        <Link className="Nav-item header" to="/signup">Signup</Link>
        </div>
          )}

        </nav>
      </div>
    </header>
  )
}

export default Navbar

