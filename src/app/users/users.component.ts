import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = null;
  constructor(private accountService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.accountService.getAllUsers().subscribe((res) => {
      console.log(res);
      if(res.status === "success"){
        this.users = res.data;
      } 
    }); 
  }

}
