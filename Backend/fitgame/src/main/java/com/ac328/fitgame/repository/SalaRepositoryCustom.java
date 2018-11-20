package com.ac328.fitgame.repository;

import java.util.List;

import com.ac328.fitgame.data.SalaData;
import com.ac328.fitgame.data.AvaliadorData;

public interface SalaRepositoryCustom {
	List<SalaData> getSalaByAvaliador(AvaliadorData avaliadorData);
}
