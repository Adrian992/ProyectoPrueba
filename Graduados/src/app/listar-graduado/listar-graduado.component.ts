import {Component, OnInit, NgModule, Inject} from '@angular/core';
import { Graduado } from '../model/graduado';
import { GraduadoService } from '../graduado.service';

import {MatButtonModule, MatIconModule, MatDialog} from '@angular/material';
import { DialogEditarComponent } from '../dialog-editar/dialog-editar.component';//

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatDialog
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

@Component({
  selector: 'app-listar-graduado',
  templateUrl: './listar-graduado.component.html',
  styleUrls: ['./listar-graduado.component.css']
})

export class ListarGraduadoComponent implements OnInit {

  displayedColumns: string[] = ['Year', 'Sex', 'Type of Course', 'No. of Graduates', 'Accion'];

  dataSource:Graduado[];

  graduado: Graduado = new Graduado();

  constructor(private graduadoService:GraduadoService, public dialog:MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.graduadoService.getGraduadosList()
    .subscribe(dataSource=>this.dataSource=dataSource);
  }

  deleteGraduado(id_graduado){
    this.graduadoService.deleteGraduado(id_graduado)
    .subscribe(datos=>{this.loadData();})
  }

  openDialog(graduado){
    const dialogo1 = this.dialog.open(DialogEditarComponent, {
      data: new Graduado()
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        graduado.sex= art.sex;
        graduado.type_of_course = art.type_of_course;
        graduado.no_of_graduates = art.no_of_graduates;
        graduado.year = art.year;
        this.editarGraduado(graduado);
    });

  }

  editarGraduado(graduado){
    this.graduadoService.updateGraduado(graduado)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

}
