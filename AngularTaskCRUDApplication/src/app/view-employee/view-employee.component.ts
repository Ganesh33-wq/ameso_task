import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { WebApiService } from '../service/web-api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  TaskId: any;
  TaskDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.TaskId = this.route.snapshot.params['id'];      
    this.getTaskDetailById();
  }

  getTaskDetailById() {       
    console.log("tttttttttttttttttt",this.TaskId)
    this.httpProvider.getTaskDetailById(this.TaskId).subscribe((data : any) => {      
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.TaskDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
