import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateEmail } from '../../utils/utils'
import styles from './ContactModal.module.scss'
import { Dialog, Button, TextField, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import { sendMessage, contactsSelector } from '../../redux/modules/contacts'
import { contactDialogVisibleSelector,
    contactDialogPostIdSelector ,setShowContactDialog} from '../../redux/modules/contactDialog'

export default function ContactModal(){

    const [validEmail, setValidEmail] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()
    const showContactDialog = useSelector(contactDialogVisibleSelector)
    const postId = useSelector(contactDialogPostIdSelector)
    const sentMessages = useSelector(contactsSelector)
    
    //TODO: improve this. messageAlreadySent value should be stored in a state
    const index = sentMessages.indexOf(postId);
    const messageAlreadySent = index > -1

    function handleClose() {
        dispatch(setShowContactDialog({visible: false, postId: ''}))
    }

    function handleSendMessage(ev){
        const valid = validateEmail(email)
        setValidEmail(valid)
        if(valid){
            dispatch(sendMessage(postId))
            handleClose()
        }
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={showContactDialog}>
            {messageAlreadySent?
                <div className={styles.alreadySent}>Ya enviaste un mensaje por esta publicación</div>
                :
                <>
                    <DialogTitle>Contactar a {postId}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            error = {!validEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            label="Email"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            label="Teléfono"
                            type="tel"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button type="submit" color="primary" onClick={handleSendMessage}>
                            Enviar
                        </Button>
                    </DialogActions>
                </>
                }
                
        </Dialog>
    )
}

