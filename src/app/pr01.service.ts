import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/pr01/public/";

@Injectable({
  providedIn: 'root'
})
export class Pr01Service {
  private cuenta = {user:'', nombre:'',rol:'', token:'',edad:'',tel:'',email:'' };
  private assist = {};
  
  setCuenta(user:string, nombre:string, rol:string, token:string, edad:string, tel:string, email:string){
    this.cuenta.user = user;
    this.cuenta.nombre = nombre;
    this.cuenta.rol = rol;
    this.cuenta.edad = edad;
    this.cuenta.tel = tel;
    this.cuenta.email = email;
    //permite almacenar en el navegador
    localStorage.setItem('user',user)
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('rol',rol)
    localStorage.setItem('token',token)
    localStorage.setItem('edad',edad)
    localStorage.setItem('tel',tel)
    localStorage.setItem('email',email)
    
  }

  getCuenta(){
   // this.cuenta.user = (localStorage.getItem('user')!=null)? localStorage.getItem('user');
   this.cuenta.user = localStorage.getItem('user');
   this.cuenta.nombre = localStorage.getItem('nombre');
   this.cuenta.rol = localStorage.getItem('rol');
   this.cuenta.token = localStorage.getItem('token'); 
   this.cuenta.edad = localStorage.getItem('edad');
   this.cuenta.tel = localStorage.getItem('tel');
   this.cuenta.email = localStorage.getItem('email'); 
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
  buscarIds(user:string){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.get(URL + "asistenciaU/"+ user, {headers:headers});
  }
  encontrarT(topic_id:string){
    console.log(topic_id);
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.get(URL + "topic/"+ topic_id, {headers:headers});
  }
  usuarios(){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.get(URL + "usuario", {headers:headers});
  }
  addTopic(tema:string, descr:string){
    let headers = new HttpHeaders;
    let form = new FormData;
    form.append('tema', tema);
    form.append('descr', descr);
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.post(URL + "topic", form, {headers:headers});
  }
  addSUS(user_id:string, topic_id:string, t_nom:string){
    let headers = new HttpHeaders;
    let form = new FormData;
    form.append('user_id', user_id);
    form.append('topic_id', topic_id);
    form.append('t_nom', t_nom);
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.post(URL + "asistencia", form, {headers:headers});
  }
  addUser(user:string, pass:string, nombre:string, rol:string, edad:string, tel:string, email:string){
    let headers = new HttpHeaders;
    let form = new FormData;
    form.append('user', user);
    form.append('pass', pass);
    form.append('nombre', nombre);
    form.append('rol', rol);
    form.append('edad', edad);
    form.append('tel', tel);
    form.append('email', email);
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.post(URL + "usuario", form, {headers:headers});
  }

  editTopic(id, tema:string, descr:string){
    console.log(id, tema, descr);
    let headers = new HttpHeaders;
    let param = new HttpParams;
    param = param.append('tema', tema);
    param = param.append('descr', descr);
    headers = headers.append('Authorization', this.cuenta.token);
    console.log(this.cuenta.token);
    return this.http.put(URL + "topic/" + id, param, {headers:headers});
  }

  delTopic(topic){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.delete(URL + "topic/" + topic.id, {headers:headers});
  }

}
