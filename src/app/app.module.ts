import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './employee/navbar/navbar.component';
import { AddComponent } from './employee/add/add.component';
import { EditComponent } from './employee/edit/edit.component';
import { HomeComponent } from './employee/home/home.component';
import { ShowComponent } from './employee/show/show.component';
import { EmpService } from './employee.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
