import { Component, OnInit } from '@angular/core';
import { Pr01Service } from '../pr01.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  topics:any;
  tema='';
  temaEdit:any;


  constructor(private pr01: Pr01Service, private msgbox: ToastrService) { }

  ngOnInit(): void {
    //console.log(this.pr01.getCuenta().user)
    this.pr01.getCuenta()
    this.llenarTabla();
  }

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

  agregar(){
    this.pr01.addTopic(this.tema).subscribe(
      datos => {
        this.llenarTabla();
      }
    );
  }
 
  editarTema(topic){
    this.temaEdit = JSON.parse(JSON.stringify(topic));
  }

  guardarCambios(){
    this.pr01.editTopic(this.temaEdit).subscribe(
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

  eliminarTema(){
    this.pr01.delTopic(this.temaEdit).subscribe(
      datos => {
        this.msgbox.success("Eliminado correctamente");
        this.llenarTabla();
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  } 

}

