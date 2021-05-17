import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from "./country";
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countriesUrl = "https://corona.lmao.ninja/v2/countries";

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country>(this.countriesUrl);
  }
}
