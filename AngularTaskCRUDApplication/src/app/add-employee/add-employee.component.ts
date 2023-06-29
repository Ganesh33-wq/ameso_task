import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addTask: TaskForm = new TaskForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddTask(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      console.log("ssssssssssssssss",this.addTask)
      this.httpProvider.saveTask(this.addTask).subscribe(async data => {
        this.router.navigate(['/Home']);
        // if (data != null) {
        //   if (data != null) {
        //     var resultData = data;
        //     if (resultData != null && resultData.isSuccess) {
        //       this.toastr.success(resultData.message);
        //       setTimeout(() => {
        //         this.router.navigate(['/Home']);
        //       }, 500);
        //     }
        //   }
        // }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }

}

export class TaskForm {
  Taskname: string = "";
  Description: string = "";
  Completed: string = "";
  Startdate: string = "";
  Enddate: string = "";

}