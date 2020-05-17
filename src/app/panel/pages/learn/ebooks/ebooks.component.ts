import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {

  public books = [1,1,1,1,1,1,1,1,1,1,1,1,1];
  public showbar = false;

  constructor() { }

  ngOnInit(): void {
  }

  public emited(id) {
    this.showbar = true;
  }
  public hidebar() {
    this.showbar = null;
  }
}
