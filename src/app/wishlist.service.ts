import { Inject, Injectable } from '@angular/core';


import {Cart} from './cart.model'

@Injectable()
export class WishlistService
{
    private wishList: Cart[] =[];

    addList(item:Cart)
    {
        this.wishList.push(item);
    }
    contains(item:Cart)
    {
        return this.wishList.includes(item);
    }
    getList()
    {
        return this.wishList;
    }

    deleteList(index:number)
    {
        return this.wishList.splice(index,1);
    }

  
        
     
}