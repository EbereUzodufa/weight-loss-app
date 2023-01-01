import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <span *ngIf="key" class="material-symbols-outlined"> {{ key }} </span>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
      .material-symbols-outlined {
        color: inherit;
      }
    `,
  ],
})
export class IconComponent {
  @Input() key!: string;
}
