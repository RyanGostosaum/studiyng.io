//@flow

import React, {Component} from 'react';
import AppRoutes from './routes';
import {Provider} from 'react-redux'
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRoutes/>
            </Provider>
        );
    }
}

export default App;
