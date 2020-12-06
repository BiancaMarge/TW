import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcountComponent } from './acount/acount.component';
import { AcsettingsComponent } from './acsettings/acsettings.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ComandhistoryComponent } from './comandhistory/comandhistory.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProceduraReturComponent } from './procedura-retur/procedura-retur.component';
import { ReturProdComponent } from './retur-prod/retur-prod.component';
import { SideLineComponent } from './side-line/side-line.component';
import { VoucherComponent } from './voucher/voucher.component';

import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'acc', component:AcountComponent},
  {path: 'wishlist', component:WishlistComponent},
  {path: 'cart', component:CartComponent},
  {path: '', component:HomeComponent },
  {path: 'acsettings', component:AcsettingsComponent},
  {path: 'comandhistory', component:ComandhistoryComponent},
  {path: 'retprod', component:ReturProdComponent},
  {path: 'voucher', component:VoucherComponent},
  {path: 'retur', component: ProceduraReturComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
