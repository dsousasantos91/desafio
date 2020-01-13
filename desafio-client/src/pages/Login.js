import React, {Component} from "react";
import '../css/pure-min.css'
import '../css/side-menu.css'
import '../css/bootstrap.min.css'
import UserIcon from '../img/users-solid.svg'

import api from "../services/api";
import {login} from "../services/auth";
import {ErrorMessage, Field, Form, Formik} from "formik";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            error: ""
        };
    }

    handleSubmit = values => {

        api({
            url: '/oauth/token',
            method: "post",
            data: `username=${values.email}&password=${values.senha}&grant_type=password`
        }).then(resp => {
            const {data} = resp
            console.log(data)
            if (data) {
                login(data.access_token)
                this.props.history.push("/clientes")
            }
            console.log(values)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-">
                        <div>
                            <div className="card-title text-center">
                                <h1>Login</h1>
                            </div>
                            <div className="text-center">
                                <img src={UserIcon} className="col-sm-3"/>
                            </div>
                        </div>


                        <div>
                            <Formik
                                initialValues={{}}
                                onSubmit={this.handleSubmit}>
                                <Form className="px-4 py-3">
                                    <div className="form-group">
                                        <Field name="email" className="form-control"
                                               placeholder="E-mail"/>
                                        <ErrorMessage component="span" name="email" className="alert alert-danger"/>
                                    </div>
                                    <div className="form-group">
                                        <Field type="password" name="senha" className="form-control"
                                               placeholder="Senha"/>
                                        <ErrorMessage component="span" name="password" className="alert alert-danger"/>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Entrar
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login
