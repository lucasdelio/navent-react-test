// Actions
const SEND_MESSAGE = 'SEND_MESSAGE'

/* This reducer stores the post id's that we already sent a message*/

// Reducer
const contactsReducer = (state = [], action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let copy = [...state]
            const index = copy.indexOf(action.id);
            if (index < 0) {
                copy.push(action.id)
            }
            return copy
        default:
            return state
    }
};

// Actions Creators
export function sendMessage(id){
    return { type: SEND_MESSAGE, id:id };
};

// Selectors
export const contactsSelector = state => state.contactsReducer;

export default contactsReducer;
