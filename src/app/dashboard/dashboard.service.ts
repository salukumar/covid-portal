import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corona  } from "./corona";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

   coronaUrl = "https://corona.lmao.ninja/v2/all";

  constructor(private http: HttpClient) { }

  getCoronaCount() {
    return this.http.get<Corona>(this.coronaUrl);
  }
}
