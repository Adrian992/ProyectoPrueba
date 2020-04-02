import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraduadoService {

  private baseURL = 'http://localhost:8080/api/graduado';

  constructor(private http:HttpClient) { }

  createGraduado(graduado:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,graduado);
  }

  updateGraduado(graduado:Object):Observable<Object>{
    return this.http.put(`${this.baseURL}`,graduado);
  }

  deleteGraduado(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }

  getGraduadosList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getGraduado(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getGraduadosListTypeCourse(type_of_course:string):Observable<any>{
    return this.http.get(`${this.baseURL}/listarPorTipoCurso/${type_of_course}`);
  }
  
}
