package br.com.desafio.service.impl;

import br.com.desafio.repository.ClienteRepository;
import br.com.desafio.model.Cliente;
import br.com.desafio.service.ClienteService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public Cliente salvar(Cliente cliente) {
        return this.clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> pesquisar() {
        return this.clienteRepository.findAll();
    }

    @Override
    public Cliente buscarPorId(Long id) {
        return this.clienteRepository.findById(id)
                .orElse(null);
    }

    @Override
    public Cliente atualizar(Long id, Cliente cliente) {

        Cliente clienteSalvo = this.buscarPorId(id);

        if (clienteSalvo == null) {
            throw new EmptyResultDataAccessException(1);
        }

        BeanUtils.copyProperties(cliente, clienteSalvo, "id");
        this.clienteRepository.save(cliente);

        return clienteSalvo;
    }

    @Override
    public void remover(Long id) {
        this.clienteRepository.deleteById(id);
    }
}
