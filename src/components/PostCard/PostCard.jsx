import React from 'react'
import styles from './PostCard.module.scss'
import {numberWithCommas} from '../../utils/utils'
import moment from 'moment/min/moment-with-locales'

const SUPERHIGHLIGHTED = 'SUPERHIGHLIGHTED'
const HIGHLIGHTED = 'HIGHLIGHTED'
const SUPERHIGHLIGHTED_COLOR = '#8265d9'
const HIGHLIGHTED_COLOR = '#5ace9f'

function getPublicationPlanColor(plan) {
    if(plan===SUPERHIGHLIGHTED)
        return {borderColor: SUPERHIGHLIGHTED_COLOR}
    else if(plan===HIGHLIGHTED)
        return {borderColor: HIGHLIGHTED_COLOR}
    return {border: 'none'}
}

function getPublishTimeFromNow(date) {
    return 'publicado '+ moment(date, "DDMMYYYY").fromNow()
}

export default function PostCard({ post }) {
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
        <section className={styles.postCard} style={getPublicationPlanColor(post.publication_plan)}>
            <div className={styles.imgContainer}>
                <img src={posting_picture} alt={posting_slug}/>
                <div className={styles.costsContainer}>
                    <div className={styles.cost}>$ { numberWithCommas(price.amount) }</div>
                    { expenses &&
                        <div className={styles.expenses}>
                            + $ { numberWithCommas(expenses.amount) } Expensas
                        </div> }
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <div>
                    <h2>{ title }</h2>
                    <span className={styles.location}>{ posting_location.address }, { posting_location.zone }, { posting_location.city }</span>
                </div>
                <p>{ posting_description }</p>
                <div className={styles.publish_date}>{getPublishTimeFromNow(publish_date)}</div>
            </div>
        </section>
    )
}