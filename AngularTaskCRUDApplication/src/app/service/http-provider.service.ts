import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { HttpClient } from '@angular/common/http';

var apiUrl = "http://127.0.0.1:8000";

// var apiUrl = "http://192.168.90.161:8001";

var httpLink = {
  getAllTask: apiUrl + "/api/tasks/",
  deleteTaskById: apiUrl + "/api/tasks/",
  getTaskById: apiUrl + "/api/tasks/",
  saveTask: apiUrl + "/api/tasks/"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService,private http: HttpClient) { }

  public getAllTask(): Observable<any> {
    return this.http.get(httpLink.getAllTask);
  }

  public deletetask(model: any): Observable<any> {
    return this.http.delete(httpLink.deleteTaskById +model+'/');

  }

  public getTaskDetailById(model: any): Observable<any> {
    return this.http.get(httpLink.getTaskById +model+'/');
  }

  public saveTask(model: any): Observable<any> {
    return this.http.post(httpLink.saveTask, model);
  }
  
}
