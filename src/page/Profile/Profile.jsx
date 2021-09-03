/* Components */
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Data from '../../data';
import './Profile.scss'

function Profile() {
    const username = useRef()
    const username1 = useRef()
    const email = useRef()
    const date = useRef()

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem('data'))
        
        username.current.textContent = userData.userName
        username1.current.textContent = userData.userName
        email.current.textContent = userData.email
        date.current.textContent = userData.date
    }, [username])

    return (
        <Header>
            <div className='profile'>
                <div className="profile-wrapper">
                    <div className="go-back">
                        <button className='back-btn'>Back</button>
                        <span>
                            <h3 className='profile-title' ref={username}>Name</h3>
                            <p className='info'>1,070 Tweets</p>
                        </span>
                    </div>
                </div>
                <div className="profile-wrapper profile-big-img"></div>
                <div className="profile-wrapper">
                    <section className='profile__about-section'>
                        <img className='profile-img about-section__img' src="https://picsum.photos/150/150" alt="photo" />
                        <h3 ref={username1} className='profile-title'>Name</h3>
                        <p ref={email} className='profile-link'>@example.com</p>
                        <p className="profile__about">About User....</p>
                        <section className='born-wrapper'>
                            <img src="./img/born.svg" alt="born" />
                            <p ref={date} className="profile__born"></p>
                        </section>
                    </section>
                    <section className='tweets-section'>
                        <div className='tweets-wrapper'>
                            <span>
                                <Link to='' className="tweets">Tweets</Link>
                                <div className='line'></div>
                            </span>
                            <Link to='' className="tweets">Tweets & replies</Link>
                            <Link to='' className="tweets">Media</Link>
                            <Link to='' className="tweets">Likes</Link>
                        </div>
                    </section>
                </div>
                <div className="profile-wrapper">
                    <ul className='profile-list'>
                        {
                            Data.map(({massage}) => {
                                return massage.map(e => {
                                    return (
                                        <li className='profile-list-item'>
                                            <img className='profile-img' src="https://picsum.photos/50/50" alt="" />
                                            <section>
                                                {
                                                    Data.map(e => {return (
                                                        <section className="title-section">
                                                            <h3 className='list-item-title'>{e.userName}</h3>
                                                            <p className='list-item-email'>{e.email}</p>
                                                        </section>
                                                    )})
                                                }
                                                <p>{e}</p>
                                            </section>
                                        </li>
                                    )
                                })
                            })
                        }
                    </ul>
                </div>
            </div>
        </Header>
    )
}

export default Profile;