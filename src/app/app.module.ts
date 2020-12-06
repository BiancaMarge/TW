import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideLineComponent } from './side-line/side-line.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AcountComponent } from './acount/acount.component';
import { CartComponent } from './cart/cart.component';



import {ButtonModule} from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';


import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';


import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './productservice';


import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';

import { SidebarModule } from 'primeng/sidebar';

import { MenubarModule} from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {OrderListModule} from 'primeng/orderlist';
import { ComandaComponent } from './comanda/comanda.component';
import { AcsettingsComponent } from './acsettings/acsettings.component';
import { ComandhistoryComponent } from './comandhistory/comandhistory.component';
import { ReturProdComponent } from './retur-prod/retur-prod.component';
import { VoucherComponent } from './voucher/voucher.component';
import { ProceduraReturComponent } from './procedura-retur/procedura-retur.component';

@NgModule({
  declarations: [
    AppComponent,
    SideLineComponent,
    CarouselComponent,
    ViewProductsComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    WishlistComponent,
    AcountComponent,
    CartComponent,
    ComandaComponent,
    AcsettingsComponent,
    ComandhistoryComponent,
    ReturProdComponent,
    VoucherComponent,
    ProceduraReturComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    CarouselModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    SidebarModule,
    MenubarModule,
    MessageModule,
    TabMenuModule,
    RouterModule,
    CardModule,
    NgbModule,
    OrderListModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
