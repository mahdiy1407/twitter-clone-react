import { useRef } from "react";
import { Link } from "react-router-dom";
import './Sign_up.scss'

/* Context */ 
import useAuth from "../../hooks/useAuth";
import Data from '../../data.jsx';

function Login() {
    const [setToken] = useAuth(false)

    const emailInput = useRef()
    const passwordInput = useRef()
    const dateInput = useRef()
    const userInput = useRef()

    function onSubmit(e) {
        e.preventDefault()

        const obj = {
            id: userInput.current.value,
            userName: userInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value,
            date: dateInput.current.value,
            massage: []
        }
        Data.push(obj)
        Data.forEach(e => {
            window.localStorage.setItem("data", JSON.stringify(e))
        })

        setToken(obj)
    }

const modal = useRef()

function modalOpener() {
    modal.current.classList.add('sign-wrapper--active')
}
function modalClose(e) {
    e.target.classList.remove('sign-wrapper--active')
}
    return (
        <>  
        {/* Global Page */}
        <div className="container sign-container">
            <img src="./img/back-twitter.png" className='back-img' alt="img" />
            <div className="wrapper">
            <img className='global-logo-img' width='50' src="./img/twitter-logo.png" alt="logo" />
            <h1 className='global-title'>Happening now</h1>
            <h2 className='global-info'>Join Twitter today</h2>
            <section className='sign-section'>
                <button className='modal-open' onClick={modalOpener}>
                    <img src="./img/Google.png" alt="google" />
                </button>
                <button className='modal-open' onClick={modalOpener}>
                    <img src="./img/apple.png" alt="apple" />
                </button>
                <button className='modal-open' onClick={modalOpener}>
                    <img src="./img/email.png" alt="apple" />
                </button>
            <p>By singing up you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <span className='sign-span'>
                <p>Already have an account? </p><Link to='/login' className='switcher-link'>Log in</Link>
            </span>
            </section>
            </div>
        </div>

        {/* Modal */}
        <div ref={modal} className="sign-wrapper" onClick={modalClose}>
            <div className='sign-up-modal'>
                <form onSubmit={onSubmit}>
                    <div className="sign-up-wrapper">
                        <img className='logo-img' src="./img/twitter-logo.png" alt="logo" />
                        <div className="date-input-wrapper">
                        <h2 className="sign-up__title">Create an account</h2>
                        <input className='sign-up__input' placeholder='User name' ref={userInput} type="text" required />
                        <input className='sign-up__input' placeholder='Email' ref={emailInput} type="email" required />
                        <input className='sign-up__input' placeholder='Password...' ref={passwordInput} type="password" required />
                        <h3 className='date-info'>Date of birth</h3>
                        <p className='data-des'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
                        <input className='sign-up__input date-input' type="date" ref={dateInput} required />
                        <button className='sign-up__btn' type="submit">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;