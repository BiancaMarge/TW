import { Component, OnDestroy, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Subscription } from 'rxjs';
import { addSyntheticLeadingComment } from 'typescript';
import { DataService } from '../data.service';
import { AuthService } from '../login/auth.service';
import {data} from '../data'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
 // isAuthenticate = false;
  //private userSub: Subscription;

  items: MenuItem[];
  items2: MenuItem[];

  activeItem: MenuItem;

  constructor(private authService: AuthService,
              private ds:DataService) {}

  email:data;
    ngOnInit(): void {
    this.email=this.ds.getE();



    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        
      },
      {
        label: 'Account',
        icon: 'pi pi-user',
        routerLink: this.validateAuthAcc()
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: this.validateAuthCart()
      },
      {
        label: 'Wishlist',
        icon: 'pi pi-heart',
        routerLink: this.validateAuthWs()
      },
      {
        label: 'Login',
        icon: 'pi pi-unlock',
        routerLink: '/login'
      }
      
     
    ];
   
 
  }
  dataLogin:data;
  validateAuthCart(){
    this.dataLogin = this.ds.getE();
    if (this.dataLogin == null) 
    {
      //alert('Pentru a efectua aceasta operatie trebuie sa va logati');
      return '/login';
    }
   
    return '/cart';
  }
  validateAuthAcc(){
    this.dataLogin = this.ds.getE();
    if (this.dataLogin == null) 
    {
      //alert('Pentru a efectua aceasta operatie trebuie sa va logati');
      return '/login';
    }
   
    return '/acc';
  }
  validateAuthWs(){
    this.dataLogin = this.ds.getE();
    if (this.dataLogin == null) 
    {
      //alert('Pentru a efectua aceasta operatie trebuie sa va logati');
      return '/login';
    }
   
    return '/wishlist';
  }
}
