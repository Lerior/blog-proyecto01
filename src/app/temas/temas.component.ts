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
  ngOnInit(): void {
    console.log(this.pr01.getCuenta().user)
    this.pr01.getCuenta()
    this.llenarTabla();
  }
  
}
