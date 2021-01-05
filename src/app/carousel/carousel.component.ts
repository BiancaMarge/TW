
import {Component, ViewEncapsulation} from '@angular/core';
import { ProductService } from '../productservice';
import {Product} from '../product';
import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';
import {Cart} from '../cart.model'



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  {

  products: Product[];
	responsiveOptions;
  cart: Cart[];
  wishlist: Cart[];
  constructor(private productService: ProductService,
              private ws:WishlistService,
              private cs:CartService) 
  { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
    });

      this.cart=this.cs.getList();
      this.wishlist=this.ws.getList();
    }
    item:Cart
    addToWishlist(id, code, name, description, image, price, category, quantity, inventoryStatus,rating,quantityCart)
  {
    this.item=new Cart(id, code, name, description, image, price, category, quantity, inventoryStatus,rating,quantityCart);
    if(!(this.ws.contains(this.item)))
    {
      this.ws.addList(this.item)
    }
	
  }
    
    addToCart(id, code, name, description, image, price, category, quantity, inventoryStatus,rating,quantityCart)
    {
      this.item=new Cart(id, code, name, description, image, price, category, quantity, inventoryStatus,rating,quantityCart);
      if(this.cs.contains(this.item))
      {
        this.cs.setQCart(this.cs.setQCartP1(this.cs.index(this.item)), this.cs.index(this.item))
        this.cart=this.cs.getList();
      }
      else
      {
      this.cs.addList(this.item);
      this.cs.setQCart(1,this.cs.index(this.item))
      this.cart=this.cs.getList();
      }
     
    }

}
