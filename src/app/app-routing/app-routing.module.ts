import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookDetailsComponent} from "../book-details/book-details.component";
import {BookListComponentComponent} from "../book-list-component/book-list-component.component";

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponentComponent },
  { path: 'detail/:name', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
