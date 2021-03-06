import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarGraduadoComponent } from './listar-graduado/listar-graduado.component';
import { CrearGraduadoComponent } from './crear-graduado/crear-graduado.component';
import { DialogEditarComponent } from './dialog-editar/dialog-editar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatToolbarModule, MatTabsModule, MatTableModule, 
        MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, 
        MatNativeDateModule, MatDialogModule, MatPaginatorModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListarGraduadoComponent,
    CrearGraduadoComponent,
    DialogEditarComponent
  ],
  entryComponents:[DialogEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    MatButtonModule, //..
    MatToolbarModule,//...
    MatTabsModule, //...
    MatTableModule, //..
    MatIconModule, //...
    MatFormFieldModule, //...
    MatInputModule, //..
    MatDatepickerModule, //...
    MatNativeDateModule, //..
    MatDialogModule, //...
    MatPaginatorModule, // ...
    MatSnackBarModule  //...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
