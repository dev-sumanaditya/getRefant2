import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { BlogcardComponent } from './blogcard/blogcard.component';
import { BookComponent } from './book/book.component';
import { TestcardComponent } from './testcard/testcard.component';



@NgModule({
  declarations: [AvatarComponent, BlogcardComponent, BookComponent, TestcardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    BlogcardComponent,
    BookComponent,
    TestcardComponent
  ]
})
export class SharedModule { }
