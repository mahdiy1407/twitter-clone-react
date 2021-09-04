/* Components */
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Data from '../../data'
import './Home.scss'

function Home() {
    const [input, setInput] = useState('')
    
    const {userName, massage, email} = JSON.parse(window.localStorage.getItem('data'))

    const foundUser = Data.find(e => e.userName === userName)

    return (
        <div>
            <Header>
                <div className="home">
                    <div className="profile-wrapper home-wrap">
                        <h3 className='home-title'>Home</h3>
                        <img src="../../img/Customize.png" alt="ooo" />
                    </div>
                    <div className="profile-wrapper">
                        <form onSubmit={
                            function (e) {
                                e.preventDefault()
                                
                                if (input) {
                                    foundUser.massage.push(input)
                                    massage.push(input)
                                    
                                    setInput('')  
                                }
                            }
                            }>
                            <div className="home-wrapper">
                                <div className="tweet-wrapper">
                                    <img className='profile-img' src="https://picsum.photos/id/2/50/50" alt="" />
                                    <input value={input} onChange={e => setInput(e.target.value)} className='home-input' type="text" placeholder='What’s happening' />
                                </div>
                                <div className="tweet-wrapper tweet-btn-wrapper">
                                    <img src="../../img/Frame 29.png" alt="" />
                                    <button className='tweet-btn'>Tweet</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="profile-wrapper">
                    <ul className='profile-list'>
                        {foundUser ? 
                                foundUser.massage.map(e => {
                                    return (
                                        <li className='profile-list-item'>
                                            <img className='profile-img' src="https://picsum.photos/id/2/50/50" alt="" />
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
                            : 
                            massage.map(e => {
                                return (
                                    <li className='profile-list-item'>
                                        <img className='profile-img' src="https://picsum.photos/id/2/50/50" alt="" />
                                        <section>
                                            <section className="title-section">
                                                <h3 className='list-item-title'>{userName}</h3>
                                                <p className='list-item-email'>{email}</p>
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
        </div>
    )
}

export default Home;