import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  model: any = {}
  password:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  Login(_$event) {
    if (this.model.password === '123') {
      this.router.navigate(['/adminDash']);
    } else {
      window.alert('Wrong password');
    }
  }
  

}
