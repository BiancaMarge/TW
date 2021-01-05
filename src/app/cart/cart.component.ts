import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Cart} from  '../cart.model';
import {CartService} from '../cart.service';

import prods from './prods.json';
import {ComandHistoryService} from '../comandhistory/ComandHistory.service';
import { HttpClient } from '@angular/common/http';
import { data } from '../data';
import { DataService } from '../data.service';
import { timeStamp } from 'console';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public isButtonVisible = true;
  public isButtonVisible2 = false;
  public totalPrice = 0;
  radiobtn: string;
  c: Cart[];
  i: number;

  constructor(
    private cs: CartService,
    private ch: ComandHistoryService,
    private http: HttpClient,
    private ds:DataService
  ) {
  }


  ngOnInit() {
    this.c = this.cs.getList().slice();
    //this.totalPriceMake();
  }
/*
  totalPriceMake()
  {
    for(this.i=0; this.i<this.c.length;this.i++)
    {
      this.totalPrice=this.totalPrice + this.cs.getPrice(this.i)*this.cs.getQCart(this.i);
    }
  }
*/

  DelQ(element: Cart) {

    for (this.i = 0; this.i < this.c.length; this.i++) {
      if (this.c[this.i] === element) {

        if (this.cs.getQCart(this.i) === 1) {
          this.cs.deleteList(this.i);


          this.c = this.cs.getList();
        } else {
          this.cs.setQCart(this.cs.setQCartM1(this.i), this.cs.index(this.c[this.i]));
          this.c = this.cs.getList();


        }
      }
    }
  }

  AddQ(element: Cart) {
    for (this.i = 0; this.i < this.c.length; this.i++) {
      if (this.c[this.i] === element) {
        this.cs.setQCart(this.cs.setQCartP1(this.i), this.cs.index(this.c[this.i]));
        this.c = this.cs.getList();
      }
    }
  }

  showHide() {
    const x = document.getElementById('FinalList');
    const y = document.getElementById('OrdForm');
    const z = document.getElementById('FinalPrimaPg');
    const a = document.getElementById('SprePlata');

    if (x == null) {
      alert('Nu sunt produse in cos. Nu puteti plasa, comanda.');
    } else {
      this.isButtonVisible = false;
      this.isButtonVisible2 = true;
      if (x.style.display === 'none') {
        y.style.display = 'none';
      } else {
        y.style.display = 'block';
      }
    }
  }


  
  dataLogin:data;

  final() 
  {
    this.numberValidation();
    alert('Comanda a fost plasata cu succes');
   
    this.dataLogin=this.ds.getE();
    if(this.dataLogin != null)
    {
      console.log(this.dataLogin.email);

      this.postData( this.dataLogin.email,this.c  );
    }

  }

    // tslint:disable-next-line:typedef
    numberValidation()
    {
      // tslint:disable-next-line:prefer-const
      let x = document.forms['myForm']['firstName'].value;
      if (x == '') {
        alert('Introuceti prenumele!');
        return false;
      }

      const a = document.forms['myForm']['lastName'].value;
      if (a == '') {
        alert('Introuceti nume!');
        return false;
      }

      const b = document.forms['myForm']['email'].value;
      if (b == '') {
        alert('Introuceti emailul!');
        return false;
      }

      const c = document.forms['myForm']['address'].value;
      if (c == '') {
        alert('Introuceti adresa!');
        return false;
      }

      const d = document.forms['myForm']['name'].value;
      if (d == '') {
        alert('Introuceti nume card!');
        return false;
      }

      const e = document.forms['myForm']['expiration'].value;
      if (e == '') {
        alert('Introuceti data expirare card!');
        return false;
      }

      const f = document.forms['myForm']['ccn'].value;
      if (f == '') {
        alert('Introuceti numarul cardului!');
        return false;
      }
      if (isNaN(f)) {
        alert('Introuceti un numar!');
        return false;
      }
      const g = document.forms['myForm']['cvv'].value;
      if (g == '') {
        alert('Introuceti CVV!');
        return false;
      }
      if (isNaN(g)) {
        alert('Introuceti un numar pentru CVV!');
        return false;
      }
      return true;
    }

    obj= new Object();
    postData( email:string, listaProd:Cart[] )
    {
      this.obj= new Object({listaProd, email});
    this.http.post(
      'https://tw-app-e46ab-default-rtdb.europe-west1.firebasedatabase.app/order.json',
      this.obj
    ).subscribe(resposeData => {
        console.log(resposeData)
      }
      
    );
    }
}
