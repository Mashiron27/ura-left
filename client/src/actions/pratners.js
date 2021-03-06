import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/action-types.js';

// Action Creators
export const getPartners = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPartners();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};

export const createPartner = (partner) => async (dispatch) => {
    try {
        const { data } = await api.createPartner(partner);
        dispatch({ type: CREATE, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};