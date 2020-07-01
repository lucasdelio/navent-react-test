// Actions
const SWAP_FAVORITE = 'swap_favorite'

// Reducer
const favoritesReducer = (state = [], action) => {
    console.log('favoritesReducer')
    switch(action.type) {
        case SWAP_FAVORITE:
            let copy = [...state]
            const index = copy.indexOf(action.id);
            if (index > -1) {
                copy.splice(index, 1);
            }else{
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
