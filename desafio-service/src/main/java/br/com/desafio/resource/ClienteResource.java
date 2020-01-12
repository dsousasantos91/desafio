package br.com.desafio.resource;

import br.com.desafio.model.Cliente;
import br.com.desafio.event.RecursoCriadoEvent;
import br.com.desafio.service.impl.ClienteServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@Api(value = "API REST - Entidade Pessoa")
@RestController
@RequestMapping("/api/cliente")
public class ClienteResource {

	@Autowired
	private ClienteServiceImpl pessoaService;

	@Autowired
	private ApplicationEventPublisher publish;

	@ApiOperation(value = "Listagem de clientes.")
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_CLIENTE')")
	public ResponseEntity<List<Cliente>> pesquisar() {
		List<Cliente> clientes = pessoaService.pesquisar();
		return ResponseEntity.ok(clientes);
	}

	@ApiOperation(value = "Informações sobre um cliente específico.")
	@GetMapping(path = "/{id}", produces = "application/json")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_CLIENTE')")
	public ResponseEntity<Cliente> buscaoPorId(@PathVariable Long id) {
		Cliente cliente = pessoaService.buscarPorId(id);
		return ResponseEntity.ok(cliente);
	}

	@ApiOperation(value = "Cadastro de cliente.")
	@PostMapping(produces = "application/json")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_CLIENTE')")
	public ResponseEntity<Cliente> salvar(@Valid @RequestBody Cliente cliente, HttpServletResponse response) {
		Cliente clienteSalva = this.pessoaService.salvar(cliente);
		publish.publishEvent(new RecursoCriadoEvent(this, response, cliente.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(clienteSalva);
	}

	@ApiOperation(value = "Atualização de pessoa.")
	@PutMapping(path = "/{id}", produces = "application/json")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_CLIENTE')")
	public ResponseEntity<Cliente> atualizar(@PathVariable Long id, @Valid @RequestBody Cliente cliente) {
		Cliente clienteSalva = this.pessoaService.atualizar(id, cliente);
		return ResponseEntity.ok(clienteSalva);
	}

	@ApiOperation(value = "Remoção de pessoa e seus endereços.")
	@DeleteMapping(path = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVER_CLIENTE')")
	public void remover(@PathVariable Long id) {
		this.pessoaService.remover(id);
	}

}
