import React, { useEffect, useState } from 'react'
import CONSTANTS from '../../constants'
import styles from './HomePage.module.scss'
import PostCard from '../../components/PostCard/PostCard'

const HomePage = () => {
    const [postings, setPostings] = useState([])

    useEffect(() => {
        console.log(CONSTANTS.POSTINGS)
        setPostings(CONSTANTS.POSTINGS)
    }, [])

    return (
        <>
            <div className={styles.homePageContainer}>
                <div className={styles.container}>
                    <nav style={{width:'15rem', minWidth:'15rem', marginRight:'1rem'}}>
                        <div style={{width:'100%', height:'20rem', background:'#ccc'}}>Nav</div>
                    </nav>
                    <main>
                        { postings.map( post => <PostCard key={post.posting_id} post={post} /> ) }                    
                    </main>
                </div>
            </div>
        </>
    )
}

export default HomePage
