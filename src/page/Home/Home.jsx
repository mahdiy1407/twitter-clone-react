/* Components */
import { useRef } from 'react'
import Header from '../../components/Header/Header'
import Data from '../../data'
import './Home.scss'

function Home() {
    const input = useRef()

    return (
        <div>
            <Header>
                <div className="home">
                    <div className="profile-wrapper">
                        <h3 className='home-title'>Home</h3>
                    </div>
                    <div className="profile-wrapper">
                        <form onSubmit={
                            function (e) {
                                e.preventDefault()
                                        
                                Data.map(({massage}) => {
                                    massage.push(input.current.value);
                                })     
                            }
                            }>
                            <div className="home-wrapper">
                                <img className='profile-img' src="https://picsum.photos/50/50" alt="" />
                                <input ref={input} className='home-input' type="text" placeholder='What’s happening' />
                                <button className='tweet-btn'>Tweet</button>
                            </div>
                        </form>
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
        </div>
    )
}

export default Home;