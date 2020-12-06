import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  items: MenuItem[];
  items1: MenuItem[];
  activeItem: MenuItem;
  itemValue = ' ';
  itemName = ' ';
  itemName1 = ' ';
  itemEmail = ' ';
  itemPassword = ' ';
  login: Observable<any[]>;
  Signup: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.login = db.list('login').valueChanges();
    this.Signup = db.list('Signup').valueChanges();
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.db.list('login').push({nume : this.itemName, email: this.itemValue});
    this.itemValue = ' ';
    this.itemName = ' ';
  }

  // tslint:disable-next-line:typedef
  onSubmitSignup(){
    this.db.list('Signup').push({nume : this.itemName1, email: this.itemEmail, password: this.itemPassword});
    this.itemName1 = ' ';
    this.itemEmail = ' ';
    this.itemPassword = ' ';
  }

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

    this.items1 = [
      {label: 'Home'},
      {label: 'Shop'},
      {label: 'Contact'}
    ];

    this.activeItem = this.items1[0];
  }

}
