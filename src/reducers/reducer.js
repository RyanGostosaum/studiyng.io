import * as actions from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    error: null, 
    ready: true
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.REQ_INIT:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actions.REQ_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case actions.CREATE_USER_SUCCESS: 
            return {
                ...state, 
                ready: true
            }
        default:
            // ALWAYS
            return state;
    }
}