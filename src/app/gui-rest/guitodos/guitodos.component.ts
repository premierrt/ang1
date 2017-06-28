import { Component, OnInit } from '@angular/core';
//importuje klasę restService z moudlu restapi, komponent restservice
//modul restApi zaimporowalem przy modulach
import {RestserviceService} from 'app/restapi/restservice.service';
import {Todo} from 'app/todo/todo';

@Component({
  selector: 'app-guitodos',
  templateUrl: './guitodos.component.html',
  styleUrls: ['./guitodos.component.css']
  //,
  //dodaje ze restservice jest proivderem
  //przenioslem provider do modulu
//  providers: [RestserviceService]
})
export class GuitodosComponent implements OnInit {

//tworze obiekt typu restservice
   // restService: RestserviceService;
    aaa: string ='';
      todos: Todo[] = [];


//wstrzyknie DI przez konstruktor
    constructor(private restService: RestserviceService) {
     
       }

    
   pokazWszystkieTodos () {
       this.restService.getAllTodos();   
   } 

  ngOnInit() {
      
      this.restService.getAllTodos().subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

}
