import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './body/body.component';

import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
   
    BodyComponent,
   
    TopbarComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
