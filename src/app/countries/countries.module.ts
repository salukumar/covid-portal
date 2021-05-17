import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { EditCountriesComponent } from './edit-countries/edit-countries.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CounterfilterPipe } from './counterfilter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [CountriesComponent, EditCountriesComponent, CounterfilterPipe],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ]
})
export class CountriesModule { }
