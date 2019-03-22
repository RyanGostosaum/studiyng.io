import * as actions from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    error: null,
    current: [],
    poke: []
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
        case actions.FETCH_POKE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                poke: action.payload.POKE.results
            };
        default:
            // ALWAYS
            return state;
    }
}