import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user.inteface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  constructor(private controllerService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.controllerService.login(this.user).subscribe(
      (res: { user: User })  => {
        console.log(res.user);
        localStorage.setItem('user_id', res['user_id']);
        if (res.user.role === 'admin') {
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
