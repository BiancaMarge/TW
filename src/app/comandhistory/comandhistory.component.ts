import { Component, OnInit } from '@angular/core';

import orders from './order.json';


@Component({
  selector: 'app-comandhistory',
  templateUrl: './comandhistory.component.html',
  styleUrls: ['./comandhistory.component.scss']
})
export class ComandhistoryComponent implements OnInit {

  orderList:{code:string;
    products:string;
    price:number;
    quantity:number;
    date:string;} [] = orders;
  ngOnInit(): void {
    
  }

}
