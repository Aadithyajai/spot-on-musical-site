import { Component } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  constructor(private router:Router){}

  login(){
    this.router.navigate(['/play']);
  }
}

