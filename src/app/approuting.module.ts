import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NpagefoundComponent } from './pages/npagefound/npagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes=[
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'progress',
        component: ProgressComponent
      },
      {
        path:'grafica1',
        component: Grafica1Component
      },
      {
        path: '',
        redirectTo:'/dashboard',
        pathMatch: 'full'
      }

    ]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },



 
  {
    path: '**',
    component: NpagefoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApproutingModule { }