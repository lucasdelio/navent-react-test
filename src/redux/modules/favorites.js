// Actions
const SWAP_FAVORITE = 'swap_favorite'

// Reducer
const favoritesReducer = (state = [], action) => {
    switch(action.type) {
        // if the favorite is not in the array add it
        // if it's already in favorites remove it
        case SWAP_FAVORITE:
            let copy = [...state]
            const index = copy.indexOf(action.id);
            if (index > -1) {
                copy.splice(index, 1);
            } else {
                copy.push(action.id)
            }
            return copy
        default:
            return state
    }
};

// Actions Creators
export function swapFavorite(id){
    return { type: SWAP_FAVORITE, id:id };
};

// Selectors
export const favoritesSelector = state => state.favoritesReducer;

export default favoritesReducer;
