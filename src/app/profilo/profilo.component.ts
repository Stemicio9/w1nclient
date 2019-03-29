import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css'],
  moduleId: module.id,
})
export class ProfiloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("CIAO");
  }

}
