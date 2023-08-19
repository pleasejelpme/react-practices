import { useState } from 'react'
import './TwitterFollowCard.css'


export function TwitterFollowCard({children, userName='unknown', initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const followClick = () => {
        setIsFollowing(!isFollowing)
    }

    const followText = isFollowing ? 'following' : 'follow'
    const buttonClassName = isFollowing ? 'tw-followCard-followButton is-following' : 'tw-followCard-followButton'
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUser'>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>            
            </header>

            <aside>
                <button className={buttonClassName} onClick={followClick}>{followText}</button>

            </aside>
        </article>
    )
}