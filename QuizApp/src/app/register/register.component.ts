import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
    role: ''
  };
  constructor(private controllerService: UserService) { }

  ngOnInit() {
  }
  signup() {
    this.controllerService.signup(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res['token']);
      }
    );
  }
}
