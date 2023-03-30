import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuth: boolean = true;
  authSub!: Subscription;
  constructor(private teacherService: UserService) {}
  ngOnInit(): void {
    this.userIsAuth = this.teacherService.getIsAuthenticated();
    this.authSub = this.teacherService.getAuthListener().subscribe({
      next: (isAuth: boolean) => {
        this.userIsAuth = isAuth;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onLogout() {
    this.teacherService.onLogout();
  }
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
