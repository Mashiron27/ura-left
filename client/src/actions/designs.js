import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/action-types.js';

// Action Creators
export const getDesigns = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDesigns();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};

export const createDesign = (design) => async (dispatch) => {
    try {
        const { data } = await api.createDesign(design);
        dispatch({ type: CREATE, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};