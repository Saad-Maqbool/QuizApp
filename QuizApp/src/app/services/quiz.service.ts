import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  getQuestion() {
    return this.http.get('/quiz/?token=' + localStorage.getItem('token'));
  }
}
