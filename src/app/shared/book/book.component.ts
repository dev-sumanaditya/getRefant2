import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Output() change = new EventEmitter();

  public id = 1;
  constructor() { }

  ngOnInit(): void {
  }

  public clicked() {
    this.change.emit(this.id);
  }
}
