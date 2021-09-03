import './Header.scss'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import { useEffect, useRef } from 'react';

function Header({ children }) {
    const userName = useRef()
    const email = useRef()
    
    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem('data'))
        
        userName.current.textContent = userData.userName
        email.current.textContent = userData.email
    }, [userName, email])

    return (
            <div className="header__wrapper" email={email} username={userName}>
                <header>
                    <nav className='haeder__nav'>
                        <NavLink to='/'>
                            <img className='header-logo-img' src="./img/twitter-logo.png" alt="logo" />
                        </NavLink>
                        <ul className='header__list'>
                            <li className='header__list-item'>
                                <NavLink
                                to="/" exact
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/home.svg" alt="home" />
                                    <img className='item-img--active' src="./img/home fill.svg" alt="home" />
                                    Home
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/Explore"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/explore.svg" alt="explore" />
                                    <img className='item-img--active' src="./img/Vector-1.svg" alt="explore" />
                                    Explore
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/Notifications"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/notification.svg" alt="notification" />
                                    Notifications
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/Messages"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/messages.svg" alt="messages" />
                                    Messages
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/Bookmarks"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/bookmarks.svg" alt="bookmarks" />
                                    Bookmarks
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/Lists"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/lists.svg" alt="lists" />
                                    Lists
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/profile"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/profile outline.svg" alt="profile" />
                                    <img className='item-img--active' src="./img/profile fill.svg" alt="profile" />
                                    Profile
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/More"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <img className='item-img' src="./img/more.svg" alt="more" />
                                    More
                                </NavLink>
                            </li>
                            <li className='header__list-item'>
                                <NavLink
                                to="/sign-up"
                                className="Header__nav-link"
                                activeClassName='Header__nav-link--active'>
                                    <button className='login-btn header__tweet-btn'>Tweet</button>
                                </NavLink>
                            </li>
                            <li className='header-profile'>
                                <img className='profile-img' src="https://picsum.photos/50/50" alt="" />
                                <span>
                                    <h3 ref={userName} className='profile-name'>Name</h3>
                                    <p ref={email} className='profile-link'>@example.com</p>
                                </span>
                            </li>
                        </ul>
                    </nav>
                </header>

                {children}
                    
                <div className="suggest-wrapper">
                    <input className='suggest-input' placeholder='Search Twitter' type="text" />
                    <div className="suggest-profile-wrapper">
                        <h3 className='suggest-title'>You might like</h3>
                        <ul className="suggest-list">
                            <li className='header-profile suggest-profile'>
                                <img className='profile-img' src="https://picsum.photos/50/50" alt="" />
                                <span>
                                    <h3 className='profile-name'>Name</h3>
                                    <p className='profile-link'>@example.com</p>
                                </span>
                                <button className='follow-btn'>Follow</button>
                            </li>
                        </ul>
                        <button className='show-more-btn'>Show more</button>
                    </div>
                    <img src="./img/Group 25.png" alt="" />
                </div>
            </div>
    )
}

export default Header;