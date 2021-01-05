import { Component, OnInit } from '@angular/core';

import { ProductService } from '../productservice';
import { Product } from '../product';
import { PrimeNGConfig } from 'primeng/api';
import {Cart} from '../cart.model'
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import {User} from '../login/user.model'
import { DataService } from '../data.service';
import { data } from '../data';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { map }  from 'rxjs/operators'


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  clist:Cart[]
  dataLogin:data;

  constructor (private ws:WishlistService,
                private cartS:CartService,
                private ds:DataService,
                private http:HttpClient,
                ) {}
 
  ngOnInit()
  {
    this.clist=this.ws.getList();

   this.fetchPosts();
   
  }

  
 

  addToCart(item:Cart)
  {

	  if(this.cartS.contains(item))
	  {
		  this.cartS.setQCart(this.cartS.setQCartP1(this.cartS.index(item)), this.cartS.index(item))
		
	  }
	  else
	  {
		this.cartS.addList(item);
		this.cartS.setQCart(1,this.cartS.index(item))
	  }
	 
  }

  i:number
  delFromWl(item:Cart)
  {
    for (this.i = 0; this.i < this.clist.length; this.i++)
    {
      if(this.clist[this.i] === item)
      {
        this.ws.deleteList(this.i);
        this.clist=this.ws.getList();
      }
    }
  }

  u:User;
  saveWS()
  {
    //console.log(this.clist);
    this.dataLogin=this.ds.getE();
    if(this.dataLogin != null)
    {
      console.log(this.dataLogin.email);

      this.onCreatePost(this.clist , this.dataLogin.email );
    }
    
  }

  obj: Object;
  onCreatePost(listaProd:Cart[] , email:string)
  {
    this.obj= new Object({listaProd, email});
    this.http.post(
      'https://tw-app-e46ab-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json',
      this.obj
    ).subscribe(resposeData => {
        console.log(resposeData)
      }
      
    );
  }
  
  showP()
  {
    this.fetchPosts();
  }
  prWishList= [];
  listaMica = [];
  private fetchPosts()
  {
    this.http.get('https://tw-app-e46ab-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json')
    .pipe ( map (responseData =>
      {
        const postArray = [];
        for (let key in responseData)
        {
          if(responseData.hasOwnProperty(key))
          {
            postArray.push({ ...responseData[key], id: key})
          }
          
        }
        return postArray;
      }))
    .subscribe( posts => {
      this.prWishList=posts;
      
    });
  
    console.log(this.prWishList);
    ///------------------------------------------prelucrare
    this.dataLogin=this.ds.getE();
    
    for(this.i=this.prWishList.length-1;this.i>=0;this.i--)
    {
      if(this.prWishList[this.i].email == this.dataLogin.email )
      {
        this.listaMica.push(this.prWishList[this.i])
        break;
      }

    }

    for(let item of this.listaMica)
    {
      this.clist=item.listaProd;
    }

    

  }

}
