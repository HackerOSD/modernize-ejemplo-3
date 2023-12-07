import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
