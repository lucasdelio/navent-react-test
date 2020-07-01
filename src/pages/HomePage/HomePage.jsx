import React, { useEffect, useState } from 'react'
import CONSTANTS from '../../constants'
import styles from './HomePage.module.scss'
import PostCard from '../../components/PostCard/PostCard'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'
import SearchIcon from '@material-ui/icons/Search';
import { RadioGroup, Radio, FormControlLabel,
    FormControl, TextField, IconButton } from '@material-ui/core';

const TEMPORARY = 'temporary'
const RENT = 'rent'
const BUY = 'buy'
const ALL = 'all'

const HomePage = () => {
    const [postings, setPostings] = useState([])
    const [value, setValue] = useState(TEMPORARY);
    const [searchText, setSearchText] = useState('')

    function handleChange (event) {
        setValue(event.target.value);
    };

    useEffect(() => {
        setPostings(CONSTANTS.POSTINGS)
    }, [])

    function handleSearch(ev) {
        ev.preventDefault() //prevent default to use a hardcoded search instead fetch to api, and do not clean the form
        setPostings(CONSTANTS.POSTINGS.filter( e=> {
            //search the string manually in address, zone or city
            let fullAddress = e.posting_location.address+e.posting_location.zone+e.posting_location.city
            return fullAddress.toLowerCase().includes(searchText.toLowerCase())
        }
    ))};

    return (
        <>
            <div className={styles.homePageContainer}>
                <div className={styles.container}>
                    <div className={styles.accordionContainer}>
                        <ExpansionPanel title={"Dirección"}>
                            <form onSubmit={handleSearch}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Buscar por dirección"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    size="small"
                                />
                                <IconButton type="submit" aria-label="delete">
                                    <SearchIcon />
                                </IconButton>
                            </form>
                        </ExpansionPanel>
                        <ExpansionPanel title={"Tipo de operación"}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value={BUY} control={<Radio />} label="Comprar" />
                                    <FormControlLabel value={RENT} control={<Radio />} label="Alquilar" />
                                    <FormControlLabel value={TEMPORARY} control={<Radio />} label="Temporal" />
                                    <FormControlLabel value={ALL} control={<Radio />} label="Todos" />
                                </RadioGroup>
                            </FormControl>
                        </ExpansionPanel>
                    </div>
                    <main>
                        { postings.map( post => <PostCard key={post.posting_id} post={post} /> ) }                    
                    </main>
                </div>
            </div>
        </>
    )
}

export default HomePage
