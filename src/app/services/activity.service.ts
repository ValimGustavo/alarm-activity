import { HttpClient } from '@angular/common/http';
import { Activity } from './../../../../interfaces/activity.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient
  ) { }
  baseUrl = 'http://localhost:3000'

  save(activity:Activity){
    const url = this.baseUrl + '/activities'
    this.http.post<Activity>(url, activity)
      .subscribe((info) => {
        console.log(activity)
        alert('Atividade criada com sucesso')        
      })
  }

  read(){
    const url = this.baseUrl + '/activities'
    return this.http.get<Activity[]>(url)
  }
}
