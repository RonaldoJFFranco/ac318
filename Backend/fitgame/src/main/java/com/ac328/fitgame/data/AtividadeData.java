package com.ac328.fitgame.data;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	
	@ManyToOne(optional = false)
	@JoinColumn(name="avaliador_id")
    private AvaliadorData avaliador;
	
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
	
	/*@JsonIgnore
	public Set<AvaliadorData> getAvaliadores() {
		return avaliadores;
	}
	public void setAvaliadores(Set<AvaliadorData> avaliadores) {
		this.avaliadores = avaliadores;
	}
	
	@JsonIgnore
	public Set<SalaData> getSalas() {
		return salas;
	}
	public void setSalas(Set<SalaData> salas) {
		this.salas = salas;
	}*/
	
	public AvaliadorData getAvaliador() {
		return avaliador;
	}
	public void setAvaliador(AvaliadorData avaliador) {
		this.avaliador = avaliador;
	}
	
}
