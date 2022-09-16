import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useAuthContext } from "../../contexts/AuthContext"
import * as authService from "../../services/authService"
import Error from "../Errors/Error"
import Loader from "../Loader/Loader"


const Login = () => {

    const { login } = useAuthContext()
    const navigate = useNavigate()
    const [err, setErr] = useState({ isError: false, message: '' })

    const onLoginHandler = (event) => {

        event.preventDefault()

        let formData = new FormData(event.currentTarget)

        let email = formData.get("email")
        let password = formData.get("password")

        authService.login(email, password)
            .then(authData => {
                login(authData);
              
                navigate('/home')
            })
            .catch(err => {

                setErr({ isError: true, message: err })

            })

    }

    return (
        err.isError
            ? <Error message={err.message} setErr={setErr} />
            : <section id="login-page" className="auth">
                <form id="login" onSubmit={onLoginHandler} >

                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" defaultValue="Login" />
                        <p className="field">
                            <span>If you don't have profile click <Link to="/register">here</Link></span>
                        </p>
                    </div>
                </form>
            </section>
    )
}

export default Login