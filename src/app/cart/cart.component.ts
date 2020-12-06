import { Component, OnInit } from '@angular/core';

import { ProductService } from '../productservice';
import { Product } from '../product';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];
 
  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }


  ngOnInit() {
    this.productService.getProductsSmall().then(cars => this.products = cars);
    this.primengConfig.ripple = true;
}

}
