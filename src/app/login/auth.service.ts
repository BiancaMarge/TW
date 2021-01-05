import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { timeStamp } from "console";
import { catchError , tap} from "rxjs/operators";
import {throwError, Subject} from 'rxjs';
import {User} from './user.model'

export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    register?: boolean
}


@Injectable()

export class AuthService
{

    user = new Subject<User>();

    constructor(private http: HttpClient) {}

  
    signup(email:string, password:string){
      return  this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-IQ1DisNA29n3FB3DrlwQkVUanAAHWoE',
           {
            email:email,
            password:password,
            returnSecureToken: true
           }
        ).pipe(catchError(  this.handleError ),tap( resData =>
            {
               this.handleAut(resData.email, resData.localId, resData.idToken,  +resData.expiresIn);
            }

        ));


    }

    login(email:string, password:string)
    {
       return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-IQ1DisNA29n3FB3DrlwQkVUanAAHWoE',
            {
                email:email,
                password:password,
                returnSecureToken: true
               }
               
            ).pipe(catchError(  this.handleError ),tap( resData =>
                {
                   this.handleAut(resData.email, resData.localId, resData.idToken,  +resData.expiresIn);
                }
    
            ));

    }

    logOut() 
    {
      this.user.next(null);
    }

    private handleError(errorRes: HttpErrorResponse)
    {
        let errorMessage = 'An unknown error occurred!';
        if(!errorRes.error || !errorRes.error.error)
        {
            //network error
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message)
        {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Wrong email';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Wrong password';
                break;
        }
        return throwError(errorMessage);
    
    }

    private handleAut(email: string, userId:string, token: string, expiresIn: number)
    {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
}