import { useRef } from "react";
import { Link } from "react-router-dom";
import Data from '../../data.jsx';
import useAuth from "../../hooks/useAuth.jsx";
import './Login.scss'

function Login() {
    const emailInput = useRef()
    const passwordInput = useRef()
    const [setToken] = useAuth(false)

    function submitForm(e) {
        e.preventDefault()

        Data.forEach(e => {
            if (e.email === emailInput.current.value && e.password === passwordInput.current.value) {
                window.localStorage.setItem('token', JSON.stringify(e.email))
                window.localStorage.setItem('data', JSON.stringify(e))
                setToken(true)
            }
        })
    };   
    return (
        <div className='container login-conatiner'>
            <form onSubmit={submitForm}>
                <div className="login__input-wrapper">
                    <img className='login-logo-img' src="./img/twitter-logo.png" alt="logo" />
                    <h1 className='login__title'>Log in to Twitter</h1>
                    <input className='login__input' ref={emailInput} type="email" />
                    <input className='login__input' ref={passwordInput} type="password" />
                    <button className='login-btn' type="submit">Login</button>
                    <section className="login-link-section">
                        <Link className='switcher-link' to=''>Forgot password?</Link>
                        <Link className='switcher-link' to='/sign-up'>Sign up to Twitter</Link>
                    </section>
                </div>
            </form>
        </div>
    )
}

export default Login;