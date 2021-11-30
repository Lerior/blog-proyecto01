import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/pr01/public/";

@Injectable({
  providedIn: 'root'
})
export class Pr01Service {
  private cuenta = {user:'', nombre:'',rol:'', token:'' };
  
  setCuenta(user:string, nombre:string, rol:string, token:string){
    this.cuenta.user = user;
    this.cuenta.nombre = nombre;
    this.cuenta.rol = rol;
    this.cuenta.token = token;
    //permite almacenar en el navegador
    localStorage.setItem('user',user)
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('rol',rol)
    localStorage.setItem('token',token)
    
  }

  getCuenta(){
   // this.cuenta.user = (localStorage.getItem('user')!=null)? localStorage.getItem('user');
   this.cuenta.user = localStorage.getItem('user');
   this.cuenta.nombre = localStorage.getItem('nombre');
   this.cuenta.rol = localStorage.getItem('rol');
   this.cuenta.token = localStorage.getItem('token'); 
   return this.cuenta;
  }

  constructor(private http: HttpClient) { }

  login(user:string, pass:string){
    return this.http.get(URL + "login/" + user + "/" + pass);
  }

  topics(){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.get(URL + "topic", {headers:headers});
  }
  addTopic(tema:string){
    let headers = new HttpHeaders;
    let form = new FormData;
    form.append('tema', tema);
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.post(URL + "topic", form, {headers:headers});
  }

  editTopic(topic){
    let headers = new HttpHeaders;
    let param = new HttpParams;
    param = param.append('tema', topic.tema);
    headers = headers.append('Authorization', this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.put(URL + "topic/" + topic.id, {headers:headers, params: param});
  }

  delTopic(topic){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.delete(URL + "topic/" + topic.id, {headers:headers});
  }

}
