import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IStatus } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
url ="http://localhost:3000"
  constructor(private http: HttpClient) { }

  getStatus() : Observable<IStatus[]>{
    return this.http.get<IStatus[]>(this.url+'/status');
  }

  addStatus(data :any) {
return this.http.post<any>("http://localhost:3000/status", data);
  }
}
