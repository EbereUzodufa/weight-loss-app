import { Component, OnInit } from '@angular/core';

interface IActivity {
  iconKey: string;
  value: string;
  unit?: string;
  title: string;
  progressPercentage: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * Activity list can be extracted to a service layer
   */
  activityList: IActivity[] = [
    {
      iconKey: 'local_fire_department',
      value: '866',
      title: 'Calories',
      progressPercentage: '50',
    },
    {
      iconKey: 'local_fire_department',
      value: '7 579',
      title: 'Steps',
      progressPercentage: '70',
    },
    {
      iconKey: 'local_fire_department',
      value: '27',
      unit: 'mins',
      title: 'Left Today',
      progressPercentage: '50',
    },
  ];

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
