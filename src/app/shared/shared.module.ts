import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { BlogcardComponent } from './blogcard/blogcard.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [AvatarComponent, BlogcardComponent, BookComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    BlogcardComponent,
    BookComponent
  ]
})
export class SharedModule { }
