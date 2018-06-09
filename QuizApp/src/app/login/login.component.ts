import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
    role: ''
  };
  constructor(private controllerService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.controllerService.login(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('user_id', res['userId']);
        if (this.user.role === 'admin') {
          this.admin();
        } else {
          this.guest();
        }
      } );
  }
admin() {

  this.router.navigate(['/admin']);
}
guest() {
      this.router.navigate(['/guest']);
    }

}
