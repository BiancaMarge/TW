import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Order } from './order';

@Injectable()
export class OrderService 
{
    constructor(private http: HttpClient) { }

    getOrder() {
        return this.http.get<any>('assets/order.json')
        .toPromise()
        .then(res => <Order[]>res.data)
        .then(data => { return data; });
    }
/*
    generateOrder(): Order {
        const order: Order =  {
            
            code: "nume",
            products: "Product Description",
            price: 2,
            quantity: 4,
            date:"asd"
           
            
        };

    
        return order;
    }
    */
}