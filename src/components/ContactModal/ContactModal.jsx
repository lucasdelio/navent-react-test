import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from '@material-ui/core';
import { showContactDialogSelector, setShowContactDialog} from './../../redux/modules/contactDialog'

export default function ContactModal(){

    const dispatch = useDispatch()
    const showContactDialog = useSelector(showContactDialogSelector)

    return (
        <Dialog onClose={()=>{dispatch(setShowContactDialog(false))}} aria-labelledby="simple-dialog-title" open={showContactDialog}>
            dialog
        </Dialog>
    )
}

