import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private parametro:ActivatedRoute ) { 
    console.log('Parametro padre es: ');
    this.parametro.params.subscribe( pa=> console.log(pa) );
   }

  ngOnInit() {
  }

}
