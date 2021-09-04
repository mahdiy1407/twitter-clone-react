/* Components */
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Data from '../../data';
import './Profile.scss'
import useAuth from '../../hooks/useAuth';

function Profile() {
    const { name } = useParams()
    const [setToken] = useAuth(false)
    const foundUser = Data.find(user => user.userName === name)

    return (
        <Header>
            <div className='profile'>
                <div className="profile-wrapper">
                    <div className="go-back">
                        <button className='back-btn'>Back</button>
                        <span>
                            <h3 className='profile-title'>{foundUser.userName}</h3>
                            <p className='info'>1,070 Tweets</p>
                        </span>
                    </div>
                </div>
                <div className="profile-wrapper profile-big">
                    <img src="https://picsum.photos/910/280" alt="background" />
                </div>
                <div className="profile-wrapper">
                    <section className='log-out-section'>
                        <button onClick={() => setToken(false)} className='log-out-btn'>Log Out</button>
                    </section>
                    <section className='profile__about-section'>
                        <img className='profile-img about-section__img' src="https://picsum.photos/id/2/150/150" alt="photo" />
                        <h3 className='profile-title'>{foundUser.userName}</h3>
                        <p className='profile-link'>{foundUser.email}</p>
                        <p className="profile__about">About User....</p>
                        <section className='born-wrapper'>
                            <img src="../../img/born.svg" alt="born" />
                            <p className="profile__born">{foundUser.date}</p>
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
                            foundUser.massage.map(e => {
                                    return (
                                        <li className='profile-list-item'>
                                            <img className='profile-img' src="https://picsum.photos/id/2/50/50" alt="profile-img" />
                                            <section>
                                                <section className="title-section">
                                                    <h3 className='list-item-title'>{foundUser.userName}</h3>
                                                    <p className='list-item-email'>{foundUser.email}</p>
                                                </section>
                                                <p>{e}</p>
                                                <img src="../../img/Frame 22.png" alt="Frame 22" />
                                            </section>
                                        </li>
                                    )
                                })
                        }
                    </ul>
                </div>
            </div>
        </Header>
    )
}

export default Profile;