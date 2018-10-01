package com.ac328.fitgame.data;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "atividades")
@EntityListeners(AuditingEntityListener.class)
public class AtividadeData implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="atividade_id")
	private Long id;
	
	@NotBlank
	private String nome;
	
	@NotBlank
	private String descricao;
	
	@NotBlank
	private String dificuldade;
	
	@ManyToMany(mappedBy = "atividades")
    private Set<AvaliadorData> avaliadores = new HashSet<>();
	
	@ManyToMany(mappedBy = "atividades")
    private Set<SalaData> salas = new HashSet<>();
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getDificuldade() {
		return dificuldade;
	}
	public void setDificuldade(String dificuldade) {
		this.dificuldade = dificuldade;
	}
	
	public Set<AvaliadorData> getAvaliadores() {
		return avaliadores;
	}
	public void setAvaliadores(Set<AvaliadorData> avaliadores) {
		this.avaliadores = avaliadores;
	}
	
	public Set<SalaData> getSalas() {
		return salas;
	}
	public void setSalas(Set<SalaData> salas) {
		this.salas = salas;
	}
	
}
