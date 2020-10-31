import {PLANETS_LOAD_PLANETS} from '../actions/planetsType';

const initialState = {
    planets: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case PLANETS_LOAD_PLANETS:
            return{
                ...state,
                planets: action.payload
            }
        default: return state
    }
}