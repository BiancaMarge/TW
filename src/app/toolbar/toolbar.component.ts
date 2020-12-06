import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  
  items: MenuItem[];
  activeItem: MenuItem;

  
    ngOnInit(): void {
    this.items = [
      {
        label: 'Account',
        icon: 'pi pi-user',
        routerLink: '/acc'
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart'
      },
      {
        label: 'Wishlist',
        icon: 'pi pi-heart',
        routerLink: '/wishlist'
      },
      {
        label: 'Login',
        icon: 'pi pi-unlock',
        routerLink: '/login'
      },
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      }
    ];

  
  }

}
