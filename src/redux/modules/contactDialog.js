// Actions
const SHOW_CONTACTS_DIALOG = 'SHOW_CONTACTS_DIALOG'

// Reducer
const contactDialogReducer = ( state = false, action) => {
    switch (action.type) {
        case SHOW_CONTACTS_DIALOG: {
            return action.payload
        }
        default:
            return state;
    }
}

// Actions Creators
export function setShowContactDialog(value){
    return { type: SHOW_CONTACTS_DIALOG, payload: value }
}

// Selectors
export const showContactDialogSelector = state => state.contactDialogReducer;

export default contactDialogReducer;



