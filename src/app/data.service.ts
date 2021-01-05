import { Inject, Injectable } from '@angular/core';


import {data} from './data'

@Injectable()
export class DataService
{
    private d:data;

    getE()
    {
        return this.d;
    }
    setE( i:string )
    {
       return this.d=new data(i);
    }
    getEmail()
    {
        return this.d.email;
    }
}