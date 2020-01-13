import React, {Component} from 'react'
import '../../css/pure-min.css'
import '../../css/side-menu.css'
import '../../css/bootstrap.min.css'

import api from "../../services/api"

class ClienteList extends Component {

    constructor() {
        super();
        this.state = {lista: []};
    }

    componentDidMount() {
        api.get('http://localhost:8080/api/cliente')
            .then((response) => {
                this.setState({lista: response.data})
            })
    }

    render() {
        return (
            <div className="container">
                <div className="card-title text-center">
                    <div className="jumbotron">
                        <div>
                            <h1> Lista de Clientes </h1>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="submit"> Novo Cliente </button>
                        </div>
                    </div>
                </div>
                <div className="content" id="content">
                    <div className="pure-table pure-table-bordered">
                        <table className="table table-striped">
                            <thead>
                            <tr className="text-center">
                                <th scope="col">Nome</th>
                                <th scope="col">CPF</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Telefones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.lista.map((cliente) =>
                                    <tr key={cliente.id}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>
                                            <div className="text-center">
                                                <button className="btn btn-primary" type="submit">
                                                    Ver
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-center">
                                                <button className="btn btn-primary" type="submit">
                                                    Ver
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClienteList