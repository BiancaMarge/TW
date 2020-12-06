import { Component, OnInit } from '@angular/core';

import { ProductService } from '../productservice';
import { Product } from '../product';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(cars => this.products = cars);
    this.primengConfig.ripple = true;
}

}
