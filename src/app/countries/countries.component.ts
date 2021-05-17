import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';
import {NgForm} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';


// import  *  as  countries  from  './countryList.json';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // countries: Country;
  countries = [];
  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>(this.countries);
  searchTerm: string = '';
  countryLen : number = null;
  obs: Observable<any>;

  constructor(private countryService: CountryService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.getCountriesCases()
   
  }

  getCountriesCases() {
    this.countryService.getCountries().subscribe((res: any) => {
          this.countries = res;
          this.countryLen = res.length;
          this.dataSource = new MatTableDataSource<Country>(this.countries);
          this.dataSource.paginator = this.paginator;
          this.obs = this.dataSource.connect();
    })
  }

  trackByFn(index, item) {
    return item;
  }

  sortCountry(type) {
    // this.countries.for
  }

}
