import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons/icons.component';
import { SamplePageComponent } from './sample-page/sample-page.component';



@NgModule({
  declarations: [
    IconsComponent,
    SamplePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExtraModule { }
