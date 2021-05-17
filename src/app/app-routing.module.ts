import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { InnerLayoutComponent } from './shared/inner-layout/inner-layout.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';

const routes: Routes = [{
  path:'', redirectTo:'/login', pathMatch: 'full'
},{
  path:'',
  component: LoginLayoutComponent,
  children:[{
    path:'login',
    component: LoginComponent
  }]
},
{
  path: '',
  component: InnerLayoutComponent,
  canActivate:[],
  children:[{
    path:'dashboard',
    component: DashboardComponent
  },
  { path: 'countries',
   loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
   }
  ]}
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
