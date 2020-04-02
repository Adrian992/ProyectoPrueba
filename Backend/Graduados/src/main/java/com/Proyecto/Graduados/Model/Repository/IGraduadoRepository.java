package com.Proyecto.Graduados.Model.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Proyecto.Graduados.Model.Graduado;

public interface IGraduadoRepository extends JpaRepository<Graduado, Integer> {
	@Query("Select g from Graduado g where " + 
			"UPPER(g.type_of_course) like concat('%',UPPER(:type_of_course),'%')")
	
	public List<Graduado> findByTipoCurso(String type_of_course);
}
