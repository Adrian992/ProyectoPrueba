package com.Proyecto.Graduados.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="graduado")
@Data
public class Graduado {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="year", nullable=false)
	private Date year;
	
	@Column(name="sex", nullable=false)
	private String sex;
	
	@Column(name="type_of_course", nullable=false)
	private String type_of_course;
	
	@Column(name="no_of_graduates", nullable=false)
	private Integer no_of_graduates;

}
