import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etests',
  templateUrl: './etests.component.html',
  styleUrls: ['./etests.component.scss']
})
export class EtestsComponent implements OnInit {

  public trending = [1,1,1,1,1,1,1];

  public subjects = [
    {
      name: 'Language',
      id: 1
    },
    {
      name: 'Computers',
      id: 2
    },
    {
      name: 'Physics',
      id: 3
    },
    {
      name: 'Chemistry',
      id: 4
    },
    {
      name: 'Mathematics',
      id: 5
    }
  ];
  selected = 2;

  constructor() { }

  ngOnInit(): void {
  }

  selectSubject(id) {
    this.selected = id;
  }
}
