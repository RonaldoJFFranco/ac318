package com.ac328.fitgame.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "salas")
@EntityListeners(AuditingEntityListener.class)
public class SalaData implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="sala_id")
	private Long id;
	
	@NotNull
	@Column(unique = true)
	private int pin;

	@OneToOne
	@JoinColumn(name = "avaliador_id")
	private AvaliadorData avaliador;
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "sala_has_atividade", 
             joinColumns = { @JoinColumn(name = "sala_id") }, 
             inverseJoinColumns = { @JoinColumn(name = "atividade_id") })
    private List<AtividadeData> atividades = new ArrayList<AtividadeData>();
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	public AvaliadorData getAvaliador() {
		return avaliador;
	}

	public void setAvaliador(AvaliadorData avaliador) {
		this.avaliador = avaliador;
	}

	public List<AtividadeData> getAtividades() {
		return atividades;
	}

	public void setAtividades(List<AtividadeData> atividades) {
		this.atividades = atividades;
	}

	/*
	public Set<AtividadeData> getAtividades() {
		return atividades;
	}

	public void setAtividades(Set<AtividadeData> atividades) {
		this.atividades = atividades;
	}*/
}
