import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'podstawy-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
    
    pierwszyTekst : string;
    drugiTekst: string;


    napisz() :void{
        this.drugiTekst = 'Zmieniam wartosc pola tekstowego w Komponencie w funkcji napisz()';
    }

  constructor() { 
      this.pierwszyTekst= 'To jest tekst ze zmiennej';
      this.drugiTekst = 'To jest drugi tekst'
  }

  ngOnInit() {
  }

}
