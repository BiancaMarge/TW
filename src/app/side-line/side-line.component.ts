import { Component, OnInit } from '@angular/core';


import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-side-line',
  templateUrl: './side-line.component.html',
  styleUrls: ['./side-line.component.scss']
})
export class SideLineComponent implements OnInit {

  visibleSidebar1;
    


  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  

}
}
