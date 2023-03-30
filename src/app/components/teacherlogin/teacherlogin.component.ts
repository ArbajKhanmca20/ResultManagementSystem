import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit,OnDestroy {
  authSub!: Subscription;
  isAuthenticated: boolean = false;

  constructor(public router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.userService.getIsAuthenticated();

    this.authSub=this.userService.getAuthListener().subscribe({next: (isAuth)=>{this.isAuthenticated = isAuth}, error: (err)=>{console.log(err)}})
  }
  loginuser(loginForm:NgForm){
    console.log(loginForm.value);
    this.userService.onLogin(loginForm.value);
  }
  ngOnDestroy(): void {
    this.authSub.unsubscribe()
  }
}

