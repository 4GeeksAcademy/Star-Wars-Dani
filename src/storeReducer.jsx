
export default function storeReducer(state, action) {
    switch (action.type) {

        case 'SET_PEOPLE':
            return { ...state, people: action.payload };

        case 'SET_PLANETS':

            return { ...state, planets: action.payload };

        case 'SET_STARSHIPS':

            return { ...state, starships: action.payload };

        case 'SET_VEHICLES':

            return { ...state, vehicles: action.payload };

        default:
            
            return state;
    }
}