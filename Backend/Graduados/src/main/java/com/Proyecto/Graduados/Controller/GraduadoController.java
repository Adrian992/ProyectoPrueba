package com.Proyecto.Graduados.Controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.Proyecto.Graduados.Controller.Service.IGraduadoService;
import com.Proyecto.Graduados.Model.Graduado;
import com.Proyecto.Graduados.Exception.ModeloNotFoundException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api/graduado")
@Api(tags = "Graduado", value="Servicio Web RESTFul de Graduados")

public class GraduadoController {
	@Autowired
	private IGraduadoService GraduadoService;
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Crear graduado", notes="Servicio para crear un nuevo graduado")
	@ApiResponses(value= { @ApiResponse(code=201, message="Graduado creado correctamente"), 
			@ApiResponse(code=400,message="Solicitud Inválida")})
	public ResponseEntity<Graduado> registrar(@Valid @RequestBody Graduado graduado){
		Graduado graduadoNew = new Graduado();
		graduadoNew = GraduadoService.registrar(graduado);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(graduadoNew.getId()).toUri();
		return ResponseEntity.created(location).build();		
	}
	
	@PutMapping
	@ApiOperation(value="Actualizar Graduado", notes="Servicio para actualizar un nuevo graduado")
	@ApiResponses(value= { @ApiResponse(code=201, message="Graduado actualizado correctamente"), 
			@ApiResponse(code=404,message="Graduado no encontrada")})
	public ResponseEntity<Graduado> actualizar(@Valid @RequestBody Graduado graduado){
		GraduadoService.modificar(graduado);		
		return new ResponseEntity<Graduado>(HttpStatus.OK);		
	}
	
	@DeleteMapping(value = "/{id}")
	@ApiOperation(value="Eliminar Graduado", notes="Servicio para eliminar un graduado")
	@ApiResponses(value= { @ApiResponse(code=201, message="Graduado eliminado correctamente"), 
			@ApiResponse(code=404,message="Graduado no encontrado")})
	public void eliminar(@PathVariable("id") Integer id) {
		Optional<Graduado> graduado = GraduadoService.listarPorId(id);
		if (!graduado.isPresent()) {
			throw new ModeloNotFoundException("ID: " + id);
		}else {
		  GraduadoService.eliminar(id);	
		}
	}
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value="Listar Graduados", notes="Servicio para listar todos los graduados")
	@ApiResponses(value= { @ApiResponse(code=201, message="Graduados encontrados"), 
			@ApiResponse(code=404,message="Graduados no encontrados")})
	public ResponseEntity<List<Graduado>> listar(){
		List<Graduado> graduados = new ArrayList<>();
		graduados = GraduadoService.listar();
		return new ResponseEntity<List<Graduado>>(graduados, HttpStatus.OK);
	}
	
	@GetMapping(value = "/{id}")
	@ApiOperation(value="Listar Graduado por Id", notes="Servicio para listar un graduado por Id")
	@ApiResponses(value= { @ApiResponse(code=201, message="Graduado encontrado"), 
			@ApiResponse(code=404,message="Graduado no encontrado")})
	public ResponseEntity<Graduado> listarId(@PathVariable("id") Integer id) {
		Optional<Graduado> graduado = GraduadoService.listarPorId(id);
		if (!graduado.isPresent()) {
			throw new ModeloNotFoundException("ID: " + id);
		}
		
		return new ResponseEntity<Graduado>(graduado.get(), HttpStatus.OK);
	}
	
	
	@GetMapping(value = "/listarPorTipoCurso/{type_of_course}")
	@ApiOperation(value="Listar Graduados por tipo de curso", notes="Servicio para listar graduados por tipo de curso")
	@ApiResponses(value= { @ApiResponse(code=201, message="Graduados encontrados"), 
			@ApiResponse(code=404,message="Graduados no encontrados")})
	public ResponseEntity<List<Graduado>> listarPorTipoCurso(@PathVariable("type_of_course") String type_of_course) {
		List<Graduado> graduados = GraduadoService.buscarPorTipoCurso(type_of_course);
		
		return new ResponseEntity<List<Graduado>>(graduados, HttpStatus.OK);
	}
	
	
}
