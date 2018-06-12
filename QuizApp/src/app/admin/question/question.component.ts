import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {
    question: '',
    category: ''
  };

  constructor(private controllerService: QuestionService) {
  }

  ngOnInit() {
  }

  submit() {
    this.controllerService.submit(this.question).subscribe(
      res => {
        console.log(res);
      });
  }
}
