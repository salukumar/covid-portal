import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'; 




@NgModule({
  declarations: [InnerLayoutComponent, LoginLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    InnerLayoutComponent,
    LoginLayoutComponent  
  ]
})
export class SharedModule { }
