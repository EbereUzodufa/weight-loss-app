import { APP_ROUTES } from './../../app-routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  readonly HOME_ROUTE = `/${APP_ROUTES.HOME}`;
  readonly HISTORY_ROUTE = `/${APP_ROUTES.HISTORY}`;
  readonly CHAT_ROUTE = `/${APP_ROUTES.CHAT}`;
  readonly ACCOUNT_ROUTE = `/${APP_ROUTES.ACCOUNT}`;

  constructor() {}

  ngOnInit(): void {}
}
