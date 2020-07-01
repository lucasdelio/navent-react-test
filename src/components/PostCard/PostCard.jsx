import React from 'react'
import styles from './PostCard.module.scss'

export default function PostCard({post}) {
    const {
        posting_picture,
        posting_slug,
        posting_location,
        posting_description,
        publish_date,
        title
    } = post

    const { price, expenses } = post.posting_prices[0]

    return (
        <section className={styles.postCard} style={{borderColor: 'green'}}>
            <div className={styles.imgContainer}>
                <img src={posting_picture} alt={posting_slug}/>
                <div className={styles.costsContainer}>
                    <div className={styles.cost}>$ { price.amount }</div>
                    { expenses &&
                        <div className={styles.expenses}>
                            + $ { expenses.amount } Expensas
                        </div> }
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <div>
                    <h2>{ title }</h2>
                    <span className={styles.location}>{ posting_location.address }, { posting_location.zone }, { posting_location.city }</span>
                </div>
                <p>{ posting_description }</p>
                <div className={styles.publish_date}>publicado hace { publish_date } días</div>
            </div>
        </section>
    )   
}