package com.ac328.fitgame.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ac328.fitgame.data.SalaData;

public interface SalaRepository extends JpaRepository<SalaData, Long>,SalaRepositoryCustom{

}
