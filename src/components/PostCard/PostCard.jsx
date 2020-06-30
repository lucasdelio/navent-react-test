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
        <section className={styles.postCard}>
            <div className={styles.imgContainer}>
                <img src={posting_picture} alt={ posting_slug }/>
                <div>$ { price.amount }</div>
                { expenses && <span>+ $ { expenses.amount } Expensas</span> }
            </div>
            <div className={styles.descriptionContainer}>
                <h2>{ title }</h2>
                <span>{ posting_location.address }, { posting_location.zone }, { posting_location.city }</span>
                <p>{ posting_description }</p>
                <div>publicado hace { publish_date } días</div>
            </div>
        </section>
    )   
}