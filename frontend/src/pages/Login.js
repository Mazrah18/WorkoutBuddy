import { useState } from 'react'
import {useLogin} from '../hooks/useLogin'

const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault() // DOESNT LET THE BROWSER REFRESH

        await login(email,password)
    }
    return(
        <form className="Login" onSubmit={handleSubmit}>
            <h3 style={{textAlign: 'center'}}>Login In</h3>
            <label>Email address: </label>
            <input 
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='name@company.com'
            />
            <label>Password:</label>
             <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='••••••••'
            />
        <div className="fun">
        <button  disabled={isLoading}>Log in</button>
        </div>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login