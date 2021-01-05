import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { waitForAsync } from '@angular/core/testing';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

import { map }  from 'rxjs/operators'
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { error } from 'protractor';

//import {LoginData} from '../logindata'
//import { LoginDataService } from '../logindata.service';

import {DataService} from '../data.service'
import {data} from '../data'

export interface Nume {
  $key: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent implements OnInit {

 
  activeItem: MenuItem;
  itemValue = ' ';
  itemName = ' ';
  itemName1 = ' ';
  itemEmail = ' ';
  itemPassword = ' ';
  login: Observable<any[]>;
  Signup: Observable<any[]>;

  constructor(private http:HttpClient,
              private authService: AuthService,
              private ds:DataService
              ) {}

  ngOnInit(): void {
   

    //this.activeItem = this.items1[0];
    

  // this.fetchPosts(); -----------------------------------------------------------------------------------> asa scot date din baza de adte
   

  }

  x:Array<any> = [];

  private fetchPosts()
  {
    this.http.get('https://tw-app-e46ab-default-rtdb.europe-west1.firebasedatabase.app/login.json')
    .pipe( map (responseData => {
       const postArray = []
       for(const key in responseData)
       {
         if(responseData.hasOwnProperty(key ))
         {
           postArray.push({...responseData[key], id:key})
         }
         
       }
       return postArray;
    }) 
    )
    .subscribe(posts => {
      this.x=posts
      console.log(posts)
    });
  }

  isLoginMode=true;

error:string =null;
  onSwitchMode()
  {
    this.isLoginMode = !this.isLoginMode;
  }

  emailLog:string=null;
  
  e:data;

  onSubmit(form: NgForm)
  {
    if(!form.valid){
      return;
    }
    const email=form.value.email;
    const password=form.value.password;

    let authObs: Observable<AuthResponseData>

    if(this.isLoginMode)
    {
      authObs = this.authService.login(email,password)
     
    }
    else
    {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(resData=> {
      console.log(resData);
      console.log(resData.email);
      this.emailLog=resData.email;

      this.e=this.ds.setE(this.emailLog)

      console.log(this.e.email + "ASD");

    }, errorMessage => {
      console.log(errorMessage);
      this.error=errorMessage;
    });

  
    
    form.reset();
  }
}
