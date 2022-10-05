import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-adddistributework',
  templateUrl: './adddistributework.component.html',
  styleUrls: ['./adddistributework.component.css']
})
export class AdddistributeworkComponent implements OnInit {

  addDistributeWork: any;
  errorTrue= false;
  errorMsg: any;
  employeeData: any;
  orderData: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addDistributeWork.controls; }
  ngOnInit(): void {
    this.buildForm();

    this._service.getOrderData().subscribe(
      (data:any)=>{
        console.log(data);
        this.orderData = data["data"];
      }
    );
  }
  buildForm()
  {
    this.addDistributeWork = this.form.group({
      orderName: ['',[Validators.required]],
      employeeName:['',Validators.required],
      status:['',Validators.required],
      quantity:['',[Validators.required]],
      damage:['',[Validators.required]]
    });
  }
  addDistribute()
  {
    if(this.addDistributeWork.invalid)
    {
        for (const control of Object.keys(this.addDistributeWork.controls)) {
          this.addDistributeWork.controls[control].markAsTouched();
        }
    }
    else
    {
        const distributeData = this.addDistributeWork.value;
        console.log(distributeData);
        this._service.addDistribute(distributeData).subscribe(
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
              this.router.navigateByUrl('/distributeWork');
            }
          }
        );
    }
  }

}
