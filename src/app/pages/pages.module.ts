import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    DashboardComponent,
    UiComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
