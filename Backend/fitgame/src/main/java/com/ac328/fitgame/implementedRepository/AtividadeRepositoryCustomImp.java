package com.ac328.fitgame.implementedRepository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ac328.fitgame.data.AtividadeData;
import com.ac328.fitgame.data.AvaliadorData;
import com.ac328.fitgame.repository.AtividadeRepositoryCustom;

@Repository
@Transactional(readOnly = true)
public class AtividadeRepositoryCustomImp implements AtividadeRepositoryCustom{
	@PersistenceContext
    EntityManager entityManager;
	@Override
	public List<AtividadeData> getAtividadeByAvaliador(AvaliadorData avaliadorData) {
		Query query = entityManager.createNativeQuery("SELECT at.* FROM atividades as at " +
                "WHERE at.avaliador_id LIKE ?", AtividadeData.class);
        query.setParameter(1, avaliadorData + "%");
        return query.getResultList();
	}
}
