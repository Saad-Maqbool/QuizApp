import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private controllerService: UserService) { }

  ngOnInit() {
  }
  login() {
    this.controllerService.login(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('user_id', res['userId']);
      }
    );
  }

}
