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

import com.ac328.fitgame.data.AtividadeData;
import com.ac328.fitgame.data.AvaliadorData;
import com.ac328.fitgame.data.SalaData;
import com.ac328.fitgame.exception.SalaNotFoundException;
import com.ac328.fitgame.repository.SalaRepository;

@CrossOrigin
@RestController
public class SalaController {
	
	@Autowired
	SalaRepository repository;

	@GetMapping("/salas")
	List<SalaData> all() {
		return repository.findAll();
	}

	@PostMapping("/salas")
	SalaData newSala(@RequestBody SalaData newSala) {
		return repository.save(newSala);
	}
	
	@PostMapping("/salas/filter")
	List<SalaData> getSalaPorAvaliador(@RequestBody AvaliadorData newSala) {
		return repository.getSalaByAvaliador(newSala);
	}
	
	@GetMapping("/salas/{id}")
	SalaData one(@PathVariable Long id) {

		return repository.findById(id)
			.orElseThrow(() -> new SalaNotFoundException("Sala", "id", id));
	}

	@PutMapping("/salas/{id}")
	SalaData replaceSala(@RequestBody SalaData newSala, @PathVariable Long id) {

		return repository.findById(id)
			.map(sala -> {
				sala.setPin(newSala.getPin());
				
				return repository.save(sala);
			})
			.orElseGet(() -> {
				newSala.setId(id);
				return repository.save(newSala);
			});
	}

	@DeleteMapping("/salas/{id}")
	void deleteSala(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
