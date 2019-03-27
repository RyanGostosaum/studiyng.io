import * as actions from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    error: null
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
        default:
            // ALWAYS
            return state;
    }
}