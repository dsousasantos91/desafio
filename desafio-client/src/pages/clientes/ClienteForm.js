import React, {Component} from 'react'
import '../../css/pure-min.css'
import '../../css/side-menu.css'
import '../../css/bootstrap.min.css'
import {ErrorMessage, Field, Form, Formik} from "formik"
import api from "../../services/api";
import {Link} from "react-router-dom";

class ClienteForm extends Component {

    constructor() {
        super();
        this.state = {
            nome:'',
            cpf:'',
            endereco: {
                cep:'',
                logradouro:'',
                complemento:'',
                bairro:'',
                cidade:'',
                uf:''
            },
            telefones: [
                {
                    ddd:'',
                    numero:'',
                    tipo:''
                }
            ],
            emails: [
                {
                    email:''
                }
            ]
        };

        this.enviaForm = this.enviaForm.bind(this)

        this.setNome = this.setNome.bind(this);
        this.setCpf = this.setCpf.bind(this);
        this.setCep = this.setCep.bind(this);
        this.setLogradouro = this.setLogradouro.bind(this);
        this.setBairro = this.setBairro.bind(this);
        this.setComplemento = this.setComplemento.bind(this);
        this.setCidade = this.setCidade.bind(this);
        this.setUf = this.setUf.bind(this);
        this.setDDD = this.setDDD.bind(this);
        this.setNumero = this.setNumero.bind(this);
        this.setTipo = this.setTipo.bind(this);
        this.setEmail = this.setEmail.bind(this);

        this.addTelefones = this.addTelefones.bind(this);
    }

    enviaForm(evento) {

        api({
            url: '/api/cliente',
            method: "post",
            headers: {
                'Content-type':'application/json'
            },
            data: JSON.stringify({
                nome:this.state.nome,
                cpf:this.state.cpf,
                endereco: {
                    cep:this.state.cep,
                    logradouro:this.state.logradouro,
                    complemento:this.state.complemento,
                    bairro:this.state.bairro,
                    cidade:this.state.cidade,
                    uf:this.state.uf
                },
                telefones: [
                    {
                        ddd:this.state.ddd,
                        numero:this.state.numero,
                        tipo:this.state.tipo
                    }
                ],
                emails: [
                    {
                        email:this.state.email
                    }
                ]
            })
        }).then(resp => {
            this.props.history.push("/clientes")
        })
    }

    setNome(evento) {
        this.setState({nome:evento.target.value})
    }

    setCpf(evento) {
        this.setState({cpf:evento.target.value})
    }

    setCep(evento) {
        this.setState({cep:evento.target.value})
    }

    setLogradouro(evento) {
        this.setState({logradouro:evento.target.value})
    }

    setComplemento(evento) {
        this.setState({complemento:evento.target.value})
    }

    setBairro(evento) {
        this.setState({bairro:evento.target.value})
    }

    setCidade(evento) {
        this.setState({cidade:evento.target.value})
    }

    setUf(evento) {
        this.setState({uf:evento.target.value})
    }

    setDDD(evento) {
        this.setState({ddd:evento.target.value})
    }

    setNumero(evento) {
        this.setState({numero:evento.target.value})
    }

    setTipo(evento) {
        this.setState({tipo:evento.target.value})
    }

    setEmail(evento) {
        this.setState({email:evento.target.value})
    }

    addTelefones(evento) {

        let telefones = this.state.telefones;

        telefones.push(
            {
                ddd:this.state.ddd,
                numero:this.state.numero,
                tipo:this.state.tipo
            }
        )

        this.setState({
            telefones:telefones
        })
    }

    render() {
        return (

            <div className="container">
                <div className="card-title text-center">
                    <div className="jumbotron">
                        <div>
                            <h1> Cadastrar Cliente </h1>
                        </div>
                    </div>
                </div>

                <div className="content" id="content">
                    <div className="needs-validation">
                        <Formik
                            initialValues={{}}
                            onSubmit={this.enviaForm} method="post">
                            <Form className="needs-validation" noValidate>
                                <div className="form-row">
                                    <div className="col-md-8 mb-3">
                                        <div className="form-group">
                                            <Field name="nome" className="form-control"
                                                   placeholder="Nome" value={this.state.nome} onChange={this.setNome}/>
                                            <ErrorMessage component="span" name="nome" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="form-group">
                                            <Field name="cpf" className="form-control"
                                                   placeholder="CPF" value={this.state.cpf} onChange={this.setCpf}/>
                                            <ErrorMessage component="span" name="cpf" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-2 mb-3">
                                        <div className="form-group 4">
                                            <h4>Endereço</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-3 mb-3">
                                        <div className="form-group">
                                            <Field name="cep" className="form-control"
                                                   placeholder="Cep" value={this.state.cep} onChange={this.setCep}/>
                                            <ErrorMessage component="span" name="cep" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <div className="form-group">
                                            <Field name="logradouro" className="form-control"
                                                   placeholder="Logradouro" value={this.state.logradouro} onChange={this.setLogradouro}/>
                                            <ErrorMessage component="span" name="logradouro" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="form-group">
                                            <Field name="complemento" className="form-control"
                                                   placeholder="Complemento" value={this.state.complemento} onChange={this.setComplemento}/>
                                            <ErrorMessage component="span" name="complemento" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <Field name="bairro" className="form-control"
                                                   placeholder="Bairro" value={this.state.bairro} onChange={this.setBairro}/>
                                            <ErrorMessage component="span" name="bairro" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="form-group">
                                            <Field name="cidade" className="form-control"
                                                   placeholder="Cidade" value={this.state.cidade} onChange={this.setCidade}/>
                                            <ErrorMessage component="span" name="cidade" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 mb-3">
                                        <div className="form-group">
                                            <Field name="uf" className="form-control"
                                                   placeholder="UF" value={this.state.uf} onChange={this.setUf}/>
                                            <ErrorMessage component="span" name="uf" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-2 mb-3">
                                        <div className="form-group 4">
                                            <h4>Contatos</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-sm-2 mb-3">
                                        <div className="form-group">
                                            <Field name="ddd" className="form-control"
                                                   placeholder="DDD" value={this.state.ddd} onChange={this.setDDD}/>
                                            <ErrorMessage component="span" name="email" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 mb-3">
                                        <div className="form-group">
                                            <Field name="numero" className="form-control"
                                                   placeholder="Número" value={this.state.numero} onChange={this.setNumero}/>
                                            <ErrorMessage component="span" name="email" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 mb-3">
                                        <div className="form-group">
                                            <Field name="tipo" className="form-control"
                                                   placeholder="Tipo" value={this.state.tipo} onChange={this.setTipo}/>
                                            <ErrorMessage component="span" name="email" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <div className="form-group">
                                            <Field name="email" className="form-control"
                                                   placeholder="E-mail" value={this.state.email} onChange={this.setEmail}/>

                                            <ErrorMessage component="span" name="email" className="alert alert-danger"/>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" type="button" onClick={this.addTelefones}>Add</button>
                                    </div>
                                    <table className="table table-striped">
                                        <thead>
                                        <tr className="text-center">
                                            <th scope="col">DDD</th>
                                            <th scope="col">Numero</th>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.telefones.map((telefone) =>
                                                <tr key={telefone.id}>
                                                    <td>{telefone.ddd}</td>
                                                    <td>{telefone.numero}</td>
                                                    <td>{telefone.tipo}</td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span> </span>
                                                            <button className="btn btn-secondary" type="submit">
                                                                Editar
                                                            </button>
                                                            <span> </span>
                                                            <button className="btn btn-danger" type="submit">
                                                                Excluir
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <button className="btn btn-primary" type="submit">Salvar</button>
                                    <span> </span>
                                    <Link to="./clientes">
                                        <button className="btn btn-danger" type="submit"> Cancelar</button>
                                    </Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClienteForm
