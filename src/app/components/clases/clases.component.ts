import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta: string = 'alert-warning';
  padding: string = 'p-5 ';
  flag: boolean = false;


  // propiedades:Object = {
  //   loading:boolean = false
  // }

  constructor() { }

  ngOnInit() {
  }

  loading() {
    this.flag = true;
    setTimeout(() => {
    this.flag = false;
    }, 3000)
  }

}
