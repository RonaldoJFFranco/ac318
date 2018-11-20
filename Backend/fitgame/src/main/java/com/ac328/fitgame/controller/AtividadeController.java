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
import com.ac328.fitgame.exception.AtividadeNotFoundException;
import com.ac328.fitgame.repository.AtividadeRepository;

@CrossOrigin
@RestController
public class AtividadeController {

	@Autowired
	AtividadeRepository repository;

	@GetMapping("/atividades")
	List<AtividadeData> all() {
		return repository.findAll();
	}

	@PostMapping("/atividades")
	AtividadeData newAtividade(@RequestBody AtividadeData newAtividade) {
		return repository.save(newAtividade);
	}
	
	@PostMapping("/atividades/filter")
	List<AtividadeData> atividadePorAvaliador(@RequestBody AvaliadorData newAtividade) {
		return repository.getAtividadeByAvaliador(newAtividade);
	}

	@GetMapping("/atividades/{id}")
	AtividadeData one(@PathVariable Long id) {

		return repository.findById(id)
			.orElseThrow(() -> new AtividadeNotFoundException("Atividade", "id", id));
	}

	@PutMapping("/atividades/{id}")
	AtividadeData replaceAtividade(@RequestBody AtividadeData newAtividade, @PathVariable Long id) {

		return repository.findById(id)
			.map(atividade -> {
				atividade.setNome(newAtividade.getNome());
				atividade.setDescricao(newAtividade.getDescricao());
				atividade.setDificuldade(newAtividade.getDificuldade());
				
				return repository.save(atividade);
			})
			.orElseGet(() -> {
				newAtividade.setId(id);
				return repository.save(newAtividade);
			});
	}

	@DeleteMapping("/atividades/{id}")
	void deleteAtividade(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
