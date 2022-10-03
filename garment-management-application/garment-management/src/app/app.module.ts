import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RestapiService } from './api_service/restapi.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendorComponent } from './vendor/vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DistributeworkComponent } from './distributework/distributework.component';
import { AdddistributeworkComponent } from './adddistributework/adddistributework.component';
import { EditdistributeworkComponent } from './editdistributework/editdistributework.component';
import { RawmaterialComponent } from './rawmaterial/rawmaterial.component';
import { EditrawmaterialComponent } from './editrawmaterial/editrawmaterial.component';
import { AddrawmaterialComponent } from './addrawmaterial/addrawmaterial.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    VendorComponent,
    EditVendorComponent,
    AddVendorComponent,
    CatalogComponent,
    DistributeworkComponent,
    AdddistributeworkComponent,
    EditdistributeworkComponent,
    RawmaterialComponent,
    EditrawmaterialComponent,
    AddrawmaterialComponent,
    AddEmployeeComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    ProductComponent,
    EditProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
