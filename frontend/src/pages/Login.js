const { useState } = require("react")

const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault() // DOESNT LET THE BROWSER REFRESH

        console.log(email, password)
    }
    return(
        <form className="Login" onSubmit={handleSubmit}>
            <h3>Login In</h3>
            <label>Email: </label>
            <input 
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
             <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Login</button>
        </form>
    )
}

export default Login