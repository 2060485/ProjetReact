package com.back.repositories;

import com.back.model.Recette;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecetteRepository extends JpaRepository<Recette, Integer> {
}
