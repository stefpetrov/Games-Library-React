import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

import * as authService from "../services/authService"

const Register = () => {

    const { login } = useAuthContext()
    const navigate = useNavigate()

    const onRegisterHandler = (event) => {
        event.preventDefault()

        let formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const repass = formData.get('confirm-password')

        if (password !== repass) {
            return alert('passwords dont match')
        }

        authService.register(email, password)
            .then(authData => {
                if (authData) {
                    login(authData)

                    navigate('/home')
                }
            })
            .catch(error => {
                return alert(error)
            })

    }







    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onRegisterHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" defaultValue="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Register