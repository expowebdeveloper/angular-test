import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { AuthService } from '../services/auth.service';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(private accountService: AuthService) {
    this.user = this.accountService.userValue;
   }

  ngOnInit(): void {
  }

}
