 import { useState } from "react"
 import styles from "./Form.module.css"
 import validation from "./validation"


export default function Form(props){
    const [userData, setUserData] =useState({username:"", password:""})

    const [errors, setErrors]=useState({username:"", password:""})
    
    const handleInputChange=(event)=>{
        const {name, value} = event.target
        setUserData({
            ...userData,
            [name]:value
        })
        setErrors(
            validation({
                ...userData,
                [name]: value
            })
        )
    }
    const handleSubmmit=(event)=>{
        event.preventDefault()
        props.login(userData)
    }
    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmmit}>
                <label>Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <p className={styles.error}>
                    {errors.username && errors.username}
                </p>
                <br/>
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <p className={styles.error}>
                    {errors.password && errors.password}
                </p>
                <br/>
                <button >Login</button>
            </form>
        </div>
    )
} 