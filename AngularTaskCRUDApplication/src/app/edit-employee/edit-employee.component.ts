import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  editTaskForm: TaskForm = new TaskForm();

  @ViewChild("TaskForm")
  TaskForm!: NgForm;

  isSubmitted: boolean = false;
  Taskid: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.Taskid = this.route.snapshot.params['id'];
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {
    this.httpProvider.getTaskDetailById(this.Taskid).subscribe((data: any) => {
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.editTaskForm.id = resultData.id;
          this.editTaskForm.Taskname = resultData.Taskname;
          this.editTaskForm.Description = resultData.Description;
          this.editTaskForm.Completed = resultData.Completed;
          this.editTaskForm.Startdate = resultData.Startdate;
          this.editTaskForm.Enddate = resultData.Enddate;
        }
      }
    },
      (error: any) => { });
  }

  EditEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveTask(this.editTaskForm).subscribe(async data => {
        this.router.navigate(['/Home']);
        // if (data != null) {
        //   var resultData = data;
        //   if (resultData != null && resultData.isSuccess) {
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
  id: number = 0;
  Taskname: string = "";
  Description: string = "";
  Completed: string = "";
  Startdate: string = "";
  Enddate: string = "";

}