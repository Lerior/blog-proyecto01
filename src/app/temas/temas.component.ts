import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pr01Service } from '../pr01.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  topics:any;
  tema='';
  descr='';
  temaEdit:any;
  user_id=this.pr01.getCuenta().user;
  topic_id= '';
  t_nom='';
  V='';
  idsTopics:any;
  constructor(private rt: Router, private pr01: Pr01Service, private msgbox: ToastrService) { }
 
 
 
  llenarTabla(){
    this.pr01.topics().subscribe(
      datos => {
        console.log(datos);
        this.topics = datos;
      },
      error => {
        console.log(error);
      }
    );
  }
  
  mostrar(topic_id, t_nom){
    console.log(topic_id, t_nom);
    this.temaEdit = JSON.parse(JSON.stringify(topic_id, t_nom));
  }
  asistir(){
    console.log(this.temaEdit);
    this.pr01.addSUS(this.user_id, this.temaEdit.id, this.temaEdit.tema).subscribe(
      datos => {
        this.msgbox.success("Modificacion correcta");
        this.llenarTabla();
      },
      error => {
        this.msgbox.error("Error al modiciar");
        console.log(error);
      }
    );
  }
  consulAsist(){
    this.pr01.buscarIds(this.pr01.getCuenta().user).subscribe(
      datos => {
        console.log(datos);
        this.idsTopics = datos;
        
      },
      error => {
        console.log(error);
      }
    );

  }
  ngOnInit(): void {
    console.log(this.pr01.getCuenta().user)
    this.pr01.getCuenta()
    this.llenarTabla();
    this.temaEdit = JSON.parse(JSON.stringify(this.topic_id));
    this.temaEdit = JSON.parse(JSON.stringify(this.t_nom));
    this.topics = JSON.parse(JSON.stringify(this.topic_id));
    this.topics = JSON.parse(JSON.stringify(this.t_nom));
    this.consulAsist();
    
  }
  
}
