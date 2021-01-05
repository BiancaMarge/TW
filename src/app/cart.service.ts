import { Inject, Injectable } from '@angular/core';


import {Cart} from './cart.model'

@Injectable()
export class CartService
{
    private cartList: Cart[] = [];

    getPrice(index:number)
    {
        return this.cartList[index].price;
    }
    

    addList(item:Cart)

    {
        this.cartList.push(item);
    }

    getList()
    {
        return this.cartList;
    }
    
    deleteList(index:number)
    {
        return this.cartList.splice(index,1);
    }

    setQCart(quantityCart:number, index:number )
    {
        this.cartList[index].quantityCart=quantityCart;
    }

    setQCartP1(index:number)
    {
        return this.cartList[index].quantityCart+1;
    }

    setQCartM1(index:number)
    {
        return this.cartList[index].quantityCart-1;
    }

    getQCart(index:number)
    {
        return this.cartList[index].quantityCart;
    }

    contains(item:Cart)
    {
        return this.cartList.includes(item);
    }

    index(item:Cart)
    {
        return this.cartList.indexOf(item);
    }

    
}