import { Inject, Injectable } from '@angular/core';
import {Cart} from '../cart.model';

@Injectable()
export class ComandHistoryService{
  private comandList: Cart[] = [];
  addList(item: Cart)
  {
    this.comandList.push(item);
  }
  getList()
  {
    return this.comandList;
  }
}
