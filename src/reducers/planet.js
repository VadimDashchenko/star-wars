import {PLANETS_LOAD_PLANETS, PLANETS_GET_VIEWABLE_PLANET, PLANETS_RESET_VIEWABLE_PLANET} from '../actions/planetsType';

const initialState = {
    planets: [],
    viewablePlanet: null,
    residents: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case PLANETS_LOAD_PLANETS:
            return{
                ...state,
                planets: action.payload
            }
        case PLANETS_GET_VIEWABLE_PLANET:
            return {
                ...state,
                viewablePlanet: action.planet,
                residents: action.residents
            }
        case PLANETS_RESET_VIEWABLE_PLANET:
            return {
                ...state,
                viewablePlanet: null,
                residents: []
            }
        default: return state
    }
}

export default reducer;