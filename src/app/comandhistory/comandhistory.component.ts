import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import orders from './order.json';
 import {map } from 'rxjs/operators'
import { DataService } from '../data.service';
import {data} from '../data'
@Component({
  selector: 'app-comandhistory',
  templateUrl: './comandhistory.component.html',
  styleUrls: ['./comandhistory.component.scss']
})
export class ComandhistoryComponent implements OnInit {
 


  constructor (
    private http:HttpClient,
    private ds:DataService,
  ) {}
 
  ngOnInit(): void {
    this.getData()
    
  }

  data = [];
  dataEm = [];

  dataLogin:data;

  email: string;
  getE()
  {
    this.dataLogin=this.ds.getE();
    return (this.dataLogin.email)
  }

  emailValid: string;



  private getData()
  {
    
    this.http.get('https://tw-app-e46ab-default-rtdb.europe-west1.firebasedatabase.app/order.json')
    .pipe( map(responseData => {
      const postArray = [];
      for( const key in responseData)
      {
        postArray.push({ ...responseData[key], id: key})
      }
      return postArray;
    } ))
    .subscribe (posts =>{
      this.data = posts
      console.log(this.data);
      //-----------------------prelucrare
      for(let item of this.data)
      {
        if(this.getE() == item.email)
        {
          this.dataEm.push(item);
        }
      }

      this.show()

    });
 
  }

  prodListAf = [];

 show()
  {
    for(let item of this.dataEm)
    {
      this.prodListAf.push(item.listaProd)
    }

    console.log(this.prodListAf)
  }
}
