import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponentComponent } from './book-list-component.component';
import {AppModule} from "../app.module";

describe('BookListComponentComponent', () => {
  let component: BookListComponentComponent;
  let fixture: ComponentFixture<BookListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponentComponent],
      imports: [AppModule]
    });
    fixture = TestBed.createComponent(BookListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
