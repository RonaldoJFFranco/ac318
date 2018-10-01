package com.ac328.fitgame.data;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "avaliadores")
@EntityListeners(AuditingEntityListener.class)
public class AvaliadorData implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="avaliador_id")
	private Long id;
	
	@NotBlank
	private String nome;
	
	@NotBlank
	@Column(unique = true)
	private String usuario;
	
	@NotBlank
	private String senha;
	
	@ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "atividade_has_avaliador", 
        joinColumns = { @JoinColumn(name = "avaliador_id") }, 
        inverseJoinColumns = { @JoinColumn(name = "atividade_id") }
    )
    Set<AtividadeData> atividades = new HashSet<>();
	
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
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Set<AtividadeData> getAtividades() {
		return atividades;
	}
	public void setAtividades(Set<AtividadeData> atividades) {
		this.atividades = atividades;
	}
	
}
