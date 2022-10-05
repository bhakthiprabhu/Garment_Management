import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productData: any;
  productNames: any;
  vendorCount: any;
  soldCount: any;
  empCount: any;
  ecount: any;

  constructor(private _service:RestapiService,private router:Router) { }

  ngOnInit(): void 
  {
    this._service.dashbordProductList().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.productData = data["data"];
      }
    );  
    this._service.dashbordProducNames().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.productNames = data["data"];
      }
    );
    this._service.dashbordVendorCount().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.vendorCount = data["data"][0].vcount;
      }
    );
    this._service.dashbordSoldCount().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.soldCount = data["data"][0].scount;
      }
    );
    this._service.dashbordEmployeeCount().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.ecount = data["data"][0].ecount;
      }
    );
  }

}
