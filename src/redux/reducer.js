import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../redux/actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [
                    ...state.myFavorites,
                    payload
                ],
                allCharacters: [...state.allCharacters, payload]
            }      
        case DELETE_FAVORITE:
            // opción b:
            // const filtered = state.myFavorites.filter((fav) => fav.id !== payload)
            // y entonnces myFavorites: filtered
            return {
                ...state,
                myFavorites: state.myFavorites.filter((fav) => fav.id !== payload)
            }  
        case FILTER:
            const copyAllCharactersFilter = [...state.allCharacters];
            return {
              ...state,
              myFavorites: copyAllCharactersFilter.filter(
                (element) => element.gender === payload
              ),
            };
            // return {
            //     ...allCharacters,
            //     myFavorites: state.filter((fav) => fav.gender !== action.payload)
            // } 
            // myFavorites: [...state.myFavorites, action.payload]
        case ORDER:
            const copyAllCharactersOrder = [...state.allCharacters];
            if (payload === "Ascendente") {
              return {
                ...state,
                myFavorites: copyAllCharactersOrder.sort(
                  (elementA, elementB) => elementA.id - elementB.id
                ),
              };
            } else if (payload === "Descendente") {
              return {
                ...state,
                myFavorites: copyAllCharactersOrder.sort(
                  (elementA, elementB) => elementB.id - elementA.id
                ),
              };
            } else {
              break;
            }
        default:
            return {...state};
    }
}


export default rootReducer;
