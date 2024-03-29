import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//import for dark/light theme toggle
import { createContext, useState } from 'react';

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
//context for light/dark theme

export const ThemeContext = createContext(null)

function App() {
const {user}  = useAuthContext()

//toggle
const [theme, setTheme] = useState('dark')

const toggleTheme = () =>{
  setTheme((curr) => (curr ==='light'? 'dark':'light'))
}

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>

    <div className="App" id={theme}>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={ user ?<Home />: <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login />: <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
 
    </ThemeContext.Provider>   

  );
}

export default App;

