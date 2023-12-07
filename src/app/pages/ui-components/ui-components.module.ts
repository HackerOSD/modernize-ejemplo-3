import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipsComponent } from './tooltips/tooltips.component';



@NgModule({
  declarations: [
    BadgeComponent,
    ChipsComponent,
    ListsComponent,
    MenuComponent,
    TooltipsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiComponentsModule { }
