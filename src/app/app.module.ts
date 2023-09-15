import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponentComponent } from './book-list-component/book-list-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import {BookStoreHeaderComponent} from "./book-store-header/book-store-header.component";
import {GroupUiModule} from "@group-ui/group-ui-angular";
import {BookCardComponent} from "./book-card/book-card.component";
import { BookDetailsComponent } from './book-details/book-details.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponentComponent,
    BookStoreHeaderComponent,
    CartComponentComponent,
    BookCardComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    GroupUiModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
