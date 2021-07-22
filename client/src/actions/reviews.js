import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/action-types.js';

// Action Creators
export const getReviews = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReviews();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};

export const createReview = (review) => async (dispatch) => {
    try {
        const { data } = await api.createReview(review);
        dispatch({ type: CREATE, payload: data });
    }
    catch(error) {
        console.log(error.message);
    }
};