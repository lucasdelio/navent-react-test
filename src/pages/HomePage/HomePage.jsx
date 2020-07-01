import React, { useEffect, useState } from 'react'
import CONSTANTS from '../../constants'
import styles from './HomePage.module.scss'
import PostCard from '../../components/PostCard/PostCard'
import ContactModal from '../../components/ContactModal/ContactModal'
import ExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel'
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux'
import { RadioGroup, Radio, FormControlLabel,
    FormControl, TextField, IconButton } from '@material-ui/core';

const ALL = '0'
const RENT = '1'
const BUY_SELL = '2'
const TEMPORARY = '3'
const NO_RESULTS = 'No hay resultados.'

const HomePage = () => {
    const [postings, setPostings] = useState([])
    const [operationType, setOperationType] = useState(ALL);
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setPostings(CONSTANTS.POSTINGS)
    }, [])

    function handleOperationTypeChange (event) {
        setOperationType(event.target.value)
        appyFilters(event.target.value)
    };

    function handleSearch(ev) {
        ev.preventDefault() //prevent default to use a hardcoded search instead fetch to api, and do not clean the form
        appyFilters()
    };

    function appyFilters(operation = operationType){
        setPostings(CONSTANTS.POSTINGS
            .filter( e=> {
                //search the string manually in address, zone or city
                let fullAddress = e.posting_location.address+e.posting_location.zone+e.posting_location.city
                return fullAddress.toLowerCase().includes(searchText.toLowerCase())
            } )
            .filter( e=> {
                if(operation===ALL){
                    return true;
                }   
                else{
                    return operation === e.posting_prices[0].operation_type.toString()
                }
            } )
        )
    }

    return (
        <>
            <ContactModal/>

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
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </form>
                        </ExpansionPanel>
                        <ExpansionPanel title={"Tipo de operación"}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="operation_type" name="operation_type1" value={operationType} onChange={handleOperationTypeChange}>
                                    <FormControlLabel value={BUY_SELL} control={<Radio />} label="Comprar" />
                                    <FormControlLabel value={RENT} control={<Radio />} label="Alquilar" />
                                    <FormControlLabel value={TEMPORARY} control={<Radio />} label="Temporal" />
                                    <FormControlLabel value={ALL} control={<Radio />} label="Todos" />
                                </RadioGroup>
                            </FormControl>
                        </ExpansionPanel>
                    </div>
                    <main>
                        { postings.length>0?
                            postings.map( post => <PostCard key={post.posting_id} post={post} /> )
                            :
                        <div>{NO_RESULTS}</div>
                        }                    
                    </main>
                </div>
            </div>
        </>
    )
}

export default HomePage
