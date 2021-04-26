import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,
    private accountService: AuthService) {
        if (this.accountService.userValue) {
          this.router.navigate(['/']);
      }
   }

  ngOnInit(): void {
  }

}
