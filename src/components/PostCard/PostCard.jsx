import React from 'react'
import styles from './PostCard.module.scss'
import {numberWithCommas} from '../../utils/utils'
import moment from 'moment'
import 'moment/min/locales'
import CONSTANTS from '../../constants'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { favoritesSelector, swapFavorite } from './../../redux/modules/favorites'
import { setShowContactDialog } from './../../redux/modules/contactDialog'

function getPublicationPlanColor(plan) {
    if(plan===CONSTANTS.SUPERHIGHLIGHTED)
        return {borderColor: CONSTANTS.SUPERHIGHLIGHTED_COLOR}
    else if(plan===CONSTANTS.HIGHLIGHTED)
        return {borderColor: CONSTANTS.HIGHLIGHTED_COLOR}
    return {border: 'none'}
}

function getPublishTimeFromNow(date) {
    return 'Publicado '+ moment(date, "DDMMYYYY").fromNow()
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
    const favorites = useSelector(favoritesSelector)
    const dispatch = useDispatch()

    function handleClickOpenContact(){
        dispatch(setShowContactDialog({visible: true, postId: post.posting_id}))
    }

    return (
        <section className={styles.postCard} style={getPublicationPlanColor(post.publication_plan)}>
            <div className={styles.imgContainer}>
                <IconButton onClick={()=> dispatch(swapFavorite(post.posting_id)) } className={styles.favoriteButton}>
                    <FavoriteBorderIcon style={{color: favorites.includes(post.posting_id)? 'red': CONSTANTS.FAVORITE_ICON_COLOR }} />
                </IconButton>
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
                    {/* TODO: display this description using trimmed text */}
                    <p>{ posting_description }</p>
                    {/* <LinesEllipsis
                        text={ posting_description }
                        maxLine='4'
                        basedOn='words'
                        component='p'
                    /> */}
                <div className={styles.dateAndContactContainer}>
                    <div className={styles.publishDate}>
                        <RestoreIcon />
                        {getPublishTimeFromNow(publish_date)}
                    </div>
                    <button onClick={handleClickOpenContact}>Contactar</button>
                </div>
            </div>
        </section>
    )
}