import { Component, OnInit, NgModule, ViewChild} from '@angular/core';
import { Graduado } from '../model/graduado';
import { GraduadoService } from '../graduado.service';

import { MatDialog} from '@angular/material';
import { DialogEditarComponent } from '../dialog-editar/dialog-editar.component';

import {MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-listar-graduado',
  templateUrl: './listar-graduado.component.html',
  styleUrls: ['./listar-graduado.component.css']
})

export class ListarGraduadoComponent implements OnInit {

  displayedColumns: string[] = ['Year', 'Sex', 'Type of Course', 'No. of Graduates', 'Accion'];

  dataSource:MatTableDataSource<Graduado>;

  graduado: Graduado = new Graduado();

  tipoCurso: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private graduadoService:GraduadoService, public dialog:MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){    
    this.graduadoService.getGraduadosList()
    .subscribe(dataSource=>{
      this.dataSource= new MatTableDataSource(dataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteGraduado(id_graduado){
    this.graduadoService.deleteGraduado(id_graduado)
    .subscribe(datos=>{this.loadData();})
  }

  openDialog(graduado){
    localStorage.setItem("id",graduado.id.toString());
    
    const dialogo1 = this.dialog.open(DialogEditarComponent, {
      data: new Graduado()
    });

    dialogo1.afterClosed().subscribe(gra => {
      if (gra != undefined){
        graduado.sex= gra.sex;
        graduado.type_of_course = gra.type_of_course;
        graduado.no_of_graduates = gra.no_of_graduates;
        graduado.year = gra.year;
        this.editarGraduado(graduado);
      }
    });
    
  }

  editarGraduado(graduado){
    this.graduadoService.updateGraduado(graduado)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

  listarPorTipoCurso(){
    if(this.tipoCurso == "" || this.tipoCurso == undefined ){
      this.loadData();
    } else{
      this.graduadoService.getGraduadosListTypeCourse(this.tipoCurso)
      .subscribe(dataSource=>{
        this.dataSource = new MatTableDataSource(dataSource);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

}
