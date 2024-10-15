import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  template: `
    <p>
      comp3 works!
    </p><br>
    <a [routerLink]="['../']">Back</a>
    <br>
  `,
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
    