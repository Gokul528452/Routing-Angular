import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
    <button (click)=" test2() ">test2</button>
  `,
  styleUrls: [ './test.component.css' ]
})
export class TestComponent implements OnInit {

  constructor(private route:Router) {
  
   }

   test2(){
    this.route.navigateByUrl('user/test/test2');
  }

  ngOnInit(): void {
  }

}
