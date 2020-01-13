import React from "react"

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"

import ClienteForm from "../pages/clientes/ClienteForm"
import ClienteList from "../pages/clientes/ClienteList"
import Login from "../pages/Login";
import NotFound from "./NotFound";
import {isAuthenticated} from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path={"/"}/>
            <PrivateRoute component={ClienteForm} exact path={"/cadastrar-cliente"}/>
            <PrivateRoute component={ClienteList} exact path={"/clientes"}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Routes