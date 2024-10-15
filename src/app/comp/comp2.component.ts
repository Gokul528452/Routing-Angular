import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private route:Router) {
   }

  ngOnInit(): void {
  }
  gocomp3(){
    this.route.navigateByUrl('component3')
  }
  back(){
    this.route.navigate(['/component1'])
  }


 
}
