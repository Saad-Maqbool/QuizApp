import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from './services/user.service';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {QuizService} from './services/quiz.service';
import {QuestionService} from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
        {
          path: 'register',
          component: RegisterComponent
        },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
  ])
    ],
  providers: [UserService, QuizService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
