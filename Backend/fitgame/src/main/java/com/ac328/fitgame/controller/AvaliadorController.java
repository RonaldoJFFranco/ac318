package com.ac328.fitgame.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ac328.fitgame.data.AvaliadorData;
import com.ac328.fitgame.exception.AvaliadorNotFoundException;
import com.ac328.fitgame.repository.AvaliadorRepository;

@CrossOrigin
@RestController
public class AvaliadorController {
	
	@Autowired
	AvaliadorRepository repository;

	@GetMapping("/avaliadores")
	List<AvaliadorData> all() {
		return repository.findAll();
	}

	@PostMapping("/avaliadores")
	AvaliadorData newAvaliador(@RequestBody AvaliadorData newAvaliador) {
		return repository.save(newAvaliador);
	}

	@GetMapping("/avaliadores/{id}")
	AvaliadorData one(@PathVariable Long id) {

		return repository.findById(id)
			.orElseThrow(() -> new AvaliadorNotFoundException("Avaliador", "id", id));
	}

	@PutMapping("/avaliadores/{id}")
	AvaliadorData replaceAvaliador(@RequestBody AvaliadorData newAvaliador, @PathVariable Long id) {

		return repository.findById(id)
			.map(avaliador -> {
				avaliador.setNome(newAvaliador.getNome());
				avaliador.setUsuario(newAvaliador.getUsuario());
				avaliador.setSenha(newAvaliador.getSenha());
				
				return repository.save(avaliador);
			})
			.orElseGet(() -> {
				newAvaliador.setId(id);
				return repository.save(newAvaliador);
			});
	}

	@DeleteMapping("/avaliadores/{id}")
	void deleteAvaliador(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
