import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/action-types.js';

// Action Creators
export const getAdSpots = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdSpots();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};

export const createAdSpot = (adSpot) => async (dispatch) => {
    try {
        const { data } = await api.createAdSpot(adSpot);
        dispatch({ type: CREATE, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};