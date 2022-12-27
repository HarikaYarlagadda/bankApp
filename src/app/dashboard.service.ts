import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IStatus } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
url ="http://localhost:3000/status"
  constructor(private http: HttpClient) { }

  getStatus() : Observable<IStatus[]>{
    return this.http.get<IStatus[]>(this.url);
  }

  addStatus(data :any) {
return this.http.post<any>(this.url, data);
  }

  updateStatus(id: any,data: any){
    return this.http.put<any>("http://localhost:3000/status/"+id, data.value);
  }
  deleteStatus(id: any){
    return this.http.delete<any>("http://localhost:3000/status/"+id);
  }
}
