import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { EditCountriesComponent } from './edit-countries/edit-countries.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'edit', component: EditCountriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
