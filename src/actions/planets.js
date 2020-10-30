import {PLANETS_LOAD_PLANETS} from './planetsType';

export const loadPlanets = payload => ({
    type: PLANETS_LOAD_PLANETS,
    payload
});