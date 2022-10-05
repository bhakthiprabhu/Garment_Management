import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalogData: any;

  constructor(public router: Router,public form: FormBuilder,private _service:RestapiService) { }

  ngOnInit(): void {
    this.buildForm()
    this._service.catalogList().subscribe((data:any)=>{
      console.log("data "+JSON.stringify(data["data"]));
      this.catalogData = data["data"];
    });
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  
  catalogGroup: any;
    userData: any;
    messageSuccess='';
    messageError: any;
    errorMsg: any;
    errorTrue = false;
    
    buildForm()
    {
      this.catalogGroup = this.form.group({
       // name:['',Validators.required],
        catalogname: ['', [Validators.required]],
        catalogtype: ['', [Validators.required]],
        catalogsize: ['', [Validators.required]],
        uploadfile:['', [Validators.required]],
        //repassword: ['', [Validators.required]],
      });
    }
    fieldTextType!: boolean;
    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }
  
    get f() { return this.catalogGroup.controls; }
    
    addcatalog()
    {
      if(this.catalogGroup.invalid)
      {
          for (const control of Object.keys(this.catalogGroup.controls)) {
            this.catalogGroup.controls[control].markAsTouched();
          }
      }
      else
      {
        this.userData = this.catalogGroup.value;
        console.log(this.userData)
        this.userData.uploadfile= this.userData.uploadfile.substring(12,);
        var str1="../../assets/img/";
        this.userData.uploadfile=str1.concat(this.userData.uploadfile.toString())
        console.log(this.userData)
        const jsonUserdata = JSON.stringify(this.userData);
        const jsonObjUser = JSON.parse(jsonUserdata);
        console.log(jsonObjUser);
  
      try
      {
        this._service.addcatalog(jsonObjUser).subscribe((data:any)=>{
        console.log("data "+JSON.stringify(data));
          if(data.error==true)
          {
            this.messageError=data.message["sqlMessage"];
            this.messageSuccess='';
          }
          else
          {
            console.log("Success");
            window.location.reload();
          }
        });
        console.log("submitted");
        }
        catch(e)
        {
          console.log(e);
          this.messageSuccess="Some error occured!";
  
        }
      }
    }

  deleteCatalog(id:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(id);
        this._service.deleteCatalog({"id":id}).subscribe(
          (data)=>
          {
            console.log(data);
            if(data.error==true)
            {
              this.errorTrue=true;
              this.errorMsg = data.message.sqlMessage;
            }
            else
            {
              window.location.reload();
            }
          }
        );
    }
  }

}
