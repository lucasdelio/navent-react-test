// Actions
const SHOW_CONTACTS_DIALOG = 'SHOW_CONTACTS_DIALOG'

/* This reducer is to store the state of the Contact Modal*/

// Reducer
const contactDialogReducer = ( state = {visible: false, postId: ''}, action) => {
    switch (action.type) {
        case SHOW_CONTACTS_DIALOG:
            return action.payload
        default:
            return state;
    }
}

// Actions Creators
export function setShowContactDialog(value){
    return { type: SHOW_CONTACTS_DIALOG, payload: value }
}

// Selectors
export const contactDialogVisibleSelector = state => state.contactDialogReducer.visible;
export const contactDialogPostIdSelector = state => state.contactDialogReducer.postId;

export default contactDialogReducer;



