import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {

  constructor() { }
  items1: MenuItem[];
  activeItem: MenuItem;
  ngOnInit(): void {
    this.items1 = [
      {
        label: 'Acount settings',
       // routerLink: '/acc/acsettings'
       id: 'app-acsettings',
       
      },
      {
        label: 'Comand history'
      },
      {
        label: 'Returnare produse'
      },
      {
        label: 'Vouchere'
      }
    ];
    this.activeItem = this.items1[0];
   

  }

  activateItem(item:any){
    this.activeItem = item;
   
  }

}
