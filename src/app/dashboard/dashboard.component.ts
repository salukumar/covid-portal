import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

import { Corona  } from "./corona";
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cases: Corona;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCoronaCases();
  }

  getCoronaCases() {
    this.dashboardService.getCoronaCount().subscribe((res: any) => {
          this.cases = res
    })
  }

}
