package br.com.desafio.service;

import br.com.desafio.domain.Cliente;

import java.util.List;

public interface ClienteService {

    Cliente salvar(Cliente cliente);

    List<Cliente> pesquisar();

    Cliente buscarPorId(Long id);

    Cliente atualizar(Long id, Cliente cliente);

    void remover(Long id);

}
