import { Injectable } from '@angular/core';
import {environment} from 'environments/environment';
import {Http, Response} from '@angular/http';
import {Todo} from '../todo/todo';

const API_URL = environment.apiUrl;

@Injectable()
export class RestserviceService {

  constructor(private http: Http) {
       
  }

}
