package com.ac328.fitgame.repository;

import java.util.List;

import com.ac328.fitgame.data.AtividadeData;
import com.ac328.fitgame.data.AvaliadorData;

public interface AtividadeRepositoryCustom {
	List<AtividadeData> getAtividadeByAvaliador(AvaliadorData avaliadorData);
}
