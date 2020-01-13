import React, {Component} from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import '../../css/bootstrap.min.css';

class ClienteForm extends Component {

    render() {
        return (
            <div className="container">
                <div id="main">
                    <div className="header">
                        <h1>Cadastro de Clientes</h1>
                    </div>
                    <div className="content" id="content">
                        <div className="needs-validation">
                            <form className="needs-validation" noValidate>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom01">Nome</label>
                                        <input type="text" className="form-control" id="validationCustom01"
                                               placeholder="Nome" value="Mark" required/>
                                        <div className="valid-feedback">
                                            Tudo certo!
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom02">Sobrenome</label>
                                        <input type="text" className="form-control" id="validationCustom02"
                                               placeholder="Sobrenome" value="Otto" required/>
                                        <div className="valid-feedback">
                                            Tudo certo!
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustomUsername">Usuário</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            </div>
                                            <input type="text" className="form-control" id="validationCustomUsername"
                                                   placeholder="Usuário" aria-describedby="inputGroupPrepend" required/>
                                            <div className="invalid-feedback">
                                                Por favor, escolha um nome de usuário.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom03">Cidade</label>
                                        <input type="text" className="form-control" id="validationCustom03"
                                               placeholder="Cidade" required/>
                                        <div className="invalid-feedback">
                                            Por favor, informe uma cidade válida.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="validationCustom04">Estado</label>
                                        <input type="text" className="form-control" id="validationCustom04"
                                               placeholder="Estado" required/>
                                        <div className="invalid-feedback">
                                            Por favor, informe um estado válido.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="validationCustom05">CEP</label>
                                        <input type="text" className="form-control" id="validationCustom05"
                                               placeholder="CEP" required/>
                                        <div className="invalid-feedback">
                                            Por favor, informe um CEP válido.
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClienteForm