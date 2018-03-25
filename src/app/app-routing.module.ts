import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';


//employe routes

import { HomeComponent } from './employee/home/home.component';
import { AddComponent } from './employee/add/add.component';
import { EditComponent } from './employee/edit/edit.component';
import { ShowComponent } from './employee/show/show.component';


const routes: Routes=[
    {path:"",redirectTo:"/home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"add", component:AddComponent},
    {path:"edit/:id", component:EditComponent},
    {path:"show/:id", component:ShowComponent}
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
    declarations:[]
})

export class AppRoutingModule{}