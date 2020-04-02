package com.Proyecto.Graduados.Controller.Service;

import java.util.List;

import com.Proyecto.Graduados.Model.Graduado;

public interface IGraduadoService extends CrudService<Graduado> {
	public List<Graduado> buscarPorTipoCurso(String type_of_course);
}
