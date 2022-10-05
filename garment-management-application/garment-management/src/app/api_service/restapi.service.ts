import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  orderData: any;
  setdistributeData(vdata: any) {
    throw new Error('Method not implemented.');
  }
  loginUrl = "http://localhost:3000/login";
  vendorUrl = "http://localhost:3000/vendorList";
  catalogUrl = "http://localhost:3000/catalogList";
  editVendorUrl = "http://localhost:3000/editVendor";
  deleteVendorUrl = "http://localhost:3000/deleteVendor";
  addVendorUrl = "http://localhost:3000/addVendor";
  addcatalogUrl  = "http://localhost:3000/addCatalog";
  distributeUrl = "http://localhost:3000/listDistribute";
  addDistributeUrl = "http://localhost:3000/addDistribute";
  editDistributeUrl = "http://localhost:3000/editDistribute";
  deleteDistributeUrl = "http://localhost:3000/deleteDistribute";
  rawMaterialUrl = "http://localhost:3000/ListRawMaterial";
  editRawMaterialUrl = "http://localhost:3000/editRawMaterial";
  deleteRawMaterialUrl = "http://localhost:3000/deleteRawMaterial";
  addRawMaterialUrl = "http://localhost:3000/addRawMaterial";
  employeeUrl = "http://localhost:3000/EmployeeList";
  addEmployeeUrl = "http://localhost:3000/addEmployee";
  editEmployeeUrl = "http://localhost:3000/editEmployee";
  deleteEmployeeUrl ="http://localhost:3000/deleteEmployee";
  addProductUrl = "http://localhost:3000/addProduct";
  editProductUrl="http://localhost:3000/editProduct";
  productUrl ="http://localhost:3000/ProductList";
  deleteProductUrl = "http://localhost:3000/deleteProduct";
  getProductUrl = "http://localhost:3000/getpid";
  getVendorUrl = "http://localhost:3000/getvid";
  getCategoryUrl = "http://localhost:3000/getcid";
  addOrderUrl="http://localhost:3000/addOrder";
  orderUrl="http://localhost:3000/orderList";
  deleteOrderUrl="http://localhost:3000/deleteOrder";
  editOrderUrl = "http://localhost:3000/editOrder";
  dashbordProductUrl="http://localhost:3000/getDashboardProduct";
  dashbordProductNameUrl="http://localhost:3000/getDashboardProductNames";
  dashbordVendorCountUrl="http://localhost:3000/getDashboardVendorCount";
  dashbordSoldCountUrl="http://localhost:3000/getDashboardSoldCount";
  dashbordEmployeeCountUrl="http://localhost:3000/getDashboardEmployeeCount";
  vendorData: any;
  distributeData:any;
  rawMaterialData :any;
  employeeData:any;
  productData:any;
  constructor(private http: HttpClient) { }
  message:any;
  login(credentials:any):Observable<any[]>
  {
    return this.http.post<any>(this.loginUrl,credentials);
  }
  vendorList():Observable<any[]>
  {
    return this.http.get<any>(this.vendorUrl);
  }
  catalogList():Observable<any[]>
  {
    return this.http.get<any>(this.catalogUrl);
  }
  rawMaterialList():Observable<any[]>
  {
    return this.http.get<any>(this.rawMaterialUrl);
  }
  productList():Observable<any[]>
  {
    return this.http.get<any>(this.productUrl);
  }
  editVendor(editVendorData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editVendorUrl,editVendorData);
  }
  editDistribute(editDistributeData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editDistributeUrl,editDistributeData);
  }
  editRawMaterial(editRawmaterialData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editRawMaterialUrl,editRawmaterialData);
  }
  editEmployee(editEmployeeData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editEmployeeUrl,editEmployeeData);
  }
  editProduct(editProductData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editProductUrl,editProductData);
  }
  setVendorData(vdata:any)
  {
    this.vendorData = vdata;
  }
  setDistributeData(ddata:any)
  {
    this.distributeData = ddata;
  }
  setRawMaterialData(rdata:any)
  {
    this.rawMaterialData = rdata;
  }
  setEmployeeData(edata:any)
  {
    this.employeeData = edata;
  }
  setProductData(pdata:any)
  {
    this.productData = pdata;
  }
  deleteProduct(pid:any)
  {
    return this.http.post<any>(this.deleteProductUrl,pid);
  }
  deleteVendor(vid:any)
  {
    return this.http.post<any>(this.deleteVendorUrl,vid);
  }
  deleteDistribute(did:any)
  {
    return this.http.post<any>(this.deleteDistributeUrl,did);
  }
  deleteRawMaterial(rid:any)
  {
    return this.http.post<any>(this.deleteRawMaterialUrl,rid);
  }
  deleteEmployee(eid:any)
  {
    return this.http.post<any>(this.deleteEmployeeUrl,eid);
  }
  addVendor(addVendorData:any)
  {
    return this.http.post<any>(this.addVendorUrl,addVendorData);
  }
  addEmployee(addEmployeeData:any)
  {
    return this.http.post<any>(this.addEmployeeUrl,addEmployeeData);
  }
  addcatalog(addCatalogData:any)
  {
    return this.http.post<any>(this.addcatalogUrl,addCatalogData);
  }
  addRawMaterial(addRawMaterialData:any)
  {
    return this.http.post<any>(this.addRawMaterialUrl,addRawMaterialData);
  }
  addProduct(addProductData:any)
  {
    return this.http.post<any>(this.addProductUrl,addProductData);
  }
  distributeList()
  {
    return this.http.get<any>(this.distributeUrl);
  }
  employeeList()
  {
    return this.http.get<any>(this.employeeUrl);
  }
  addDistribute(addDistributeData:any)
  {
    return this.http.post<any>(this.addDistributeUrl,addDistributeData);
  }
  getProductData():Observable<any[]>
  {
    return this.http.get<any>(this.getProductUrl);
  }
  getVendorData():Observable<any[]>
  {
    return this.http.get<any>(this.getVendorUrl);
  }
  getCategoryData():Observable<any[]>
  {
    return this.http.get<any>(this.getCategoryUrl);
  }
  addorder(orderData:any)
  {
    return this.http.post<any>(this.addOrderUrl,orderData);
  }
  orderList():Observable<any[]>
  {
    return this.http.get<any>(this.orderUrl);
  }
  deleteOrder(oid:any)
  {
    return this.http.post<any>(this.deleteOrderUrl,oid);
  }
  setOrderData(odata:any)
  {
    this.orderData = odata;
  }
  editOrder(editOrderData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editOrderUrl,editOrderData);
  }
  dashbordProductList():Observable<any[]>
  {
    return this.http.get<any>(this.dashbordProductUrl);
  }
  dashbordProducNames():Observable<any[]>
  {
    return this.http.get<any>(this.dashbordProductNameUrl);
  }
  dashbordVendorCount():Observable<any[]>
  {
    return this.http.get<any>(this.dashbordVendorCountUrl);
  }
  dashbordSoldCount():Observable<any[]>
  {
    return this.http.get<any>(this.dashbordSoldCountUrl);
  }
  dashbordEmployeeCount():Observable<any[]>
  {
    return this.http.get<any>(this.dashbordEmployeeCountUrl)
  }
}
