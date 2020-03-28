package com.Proyecto.Graduados.Controller.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Proyecto.Graduados.Controller.Service.IGraduadoService;
import com.Proyecto.Graduados.Model.Graduado;
import com.Proyecto.Graduados.Model.Repository.IGraduadoRepository;

@Service
@Transactional(readOnly = true)
public class GraduadoServiceImpl implements IGraduadoService {
	
	@Autowired
	private IGraduadoRepository graduadoRepository;

	@Override
	@Transactional
	public Graduado registrar(Graduado t) {
		return graduadoRepository.save(t);
	}

	@Override
	@Transactional
	public Graduado modificar(Graduado t) {
		return graduadoRepository.save(t);
	}

	@Override
	@Transactional
	public void eliminar(int id) {
		graduadoRepository.deleteById(id);
		
	}

	@Override
	public Optional<Graduado> listarPorId(int id) {
		return graduadoRepository.findById(id);
	}

	@Override
	public List<Graduado> listar() {
		return graduadoRepository.findAll();
	}

}
