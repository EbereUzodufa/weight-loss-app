import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  graph = {
    tue: 10,
    wed: 9,
    thur: 5,
    fri: 6,
    sat: 8,
    sun: 3,
    mon: 4,
  };
  ratio = 2;
  constructor() {}

  ngOnInit(): void {}
}
