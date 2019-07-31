import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AppRouterModule } from './app-router.module';

// services
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    // Mat
   BrowserAnimationsModule,
   MatCardModule,
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
