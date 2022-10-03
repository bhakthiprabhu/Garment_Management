import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AdddistributeworkComponent } from './adddistributework/adddistributework.component';
import { AddrawmaterialComponent } from './addrawmaterial/addrawmaterial.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistributeworkComponent } from './distributework/distributework.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { EditdistributeworkComponent } from './editdistributework/editdistributework.component';
import { EditrawmaterialComponent } from './editrawmaterial/editrawmaterial.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RawmaterialComponent } from './rawmaterial/rawmaterial.component';
import { VendorComponent } from './vendor/vendor.component';
const routes: Routes = 
[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'vendor',
    component:VendorComponent
  },
  {
    path:'editvendor',
    component:EditVendorComponent
  },
  {
    path:'addVendor',
    component:AddVendorComponent
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'distributeWork',
    component:DistributeworkComponent
  },
  {
    path:'addDistributeWork',
    component:AdddistributeworkComponent
  },
  {
    path:'editdistributework',
    component:EditdistributeworkComponent
  },
  {
    path: 'rawmaterial',
    component:RawmaterialComponent
  },
  {
    path: 'addRawMaterial',
    component:AddrawmaterialComponent
  },
  {
    path: 'editRawMaterial',
    component:EditrawmaterialComponent
  },
  {
    path:'addEmployee',
    component:AddEmployeeComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'editemployee',
    component:EditEmployeeComponent
  },
  {
    path:'editProduct',
    component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
