import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user-account/user.service";
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private userService:UserService){
    
  }

  ngOnInit(): void {
    // Parameters obj:
    //this.userService.loginUser();
  }
  
}
