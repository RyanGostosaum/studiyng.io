import React, {Component} from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import routes from "./routes.js";
import Sidebar from "../components/layout/index.js";
import Login from "../views/Login.js"
import {PrivateRoute} from '../components/routes/index.js';
//import Profile from "../views/Profile.js"
class AppRoutes extends Component {

    render() {
        const routeComponents = routes.map(({
            path,
            component
        }, key) => <PrivateRoute exact path={path} component={component} key={key}/>);

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Sidebar routes={routes}>
                        <div>
                            <div className="content">
                                {routeComponents}
                            </div>
                        </div>
                    </Sidebar>     
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRoutes