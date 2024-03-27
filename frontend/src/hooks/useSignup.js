import { useState } from "react";
import { useAuthContext } from  './useAuthContext'

export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [IsLoading, setIsLoading] = useState(null)
    const {dispatch } = useAuthContext()

    const signup = async (email,password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://workoutbuddy-3dqd.onrender.com/api/signup', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email,
                    password
                })
        })
        
       const json = await response.json()

    if(!response.ok) {
        setIsLoading(false)
        setError(json.error)
    }
    if(response.ok){
        //save the user to local storage
        localStorage.setItem('user', JSON.stringify(json))

        //update Auth content
        dispatch({type: 'LOGIN', payload: json})

        setIsLoading(false)
    }
}
return { signup, IsLoading, error}
}