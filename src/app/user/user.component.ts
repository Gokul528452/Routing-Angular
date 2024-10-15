import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private rou:Router) { }

  ngOnInit(): void {
  }

  testing(){
      this.rou.navigateByUrl("user/test");
  }

}
