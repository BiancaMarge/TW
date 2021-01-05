import { Component, OnInit } from '@angular/core';

import orders from './orderRetur.json';


@Component({
  selector: 'app-retur-prod',
  templateUrl: './retur-prod.component.html',
  styleUrls: ['./retur-prod.component.scss']
})
export class ReturProdComponent implements OnInit {

  orderList:{code:string;
    products:string;
    price:number;
    quantity:number;
    date:string;} [] = orders;

  ngOnInit(): void {
  }

}
