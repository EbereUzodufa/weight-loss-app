import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { GraphComponent } from './graph/graph.component';



@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    GraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    GraphComponent
  ]
})
export class SharedModule { }
