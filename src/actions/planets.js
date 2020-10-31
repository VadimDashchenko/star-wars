import {PLANETS_LOAD_PLANETS, PLANETS_GET_VIEWABLE_PLANET, PLANETS_RESET_VIEWABLE_PLANET} from './planetsType';

export const loadPlanets = payload => ({
    type: PLANETS_LOAD_PLANETS,
    payload
});

export const getViewablePlanet = (planet, residents) => ({
    type: PLANETS_GET_VIEWABLE_PLANET,
    planet,
    residents
});

export const resetViewablePlanet = payload => ({
    type: PLANETS_RESET_VIEWABLE_PLANET,
    payload
});