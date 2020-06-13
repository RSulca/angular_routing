import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  estado: string = 'danger';

  pintar(color) {
    if (color.value === '') {
      alert('Llene los campos.')
    } else {
      console.log(color);
      this.estado = color.value;
      color.value = '';
    }
    return false;
  }

}
