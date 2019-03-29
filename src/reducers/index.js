import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import rootReducer from "./reducer";


export default combineReducers({
    root: rootReducer, 
    form: reduxFormReducer
});