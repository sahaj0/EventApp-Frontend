import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  // AllEvents="http://18.232.224.191:8084/event/allEvents";
  AllEvents= "https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test"
  EventById="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test"
 // EventById="http://18.232.224.191:8084/event/getEventById"

  getAllEvents(){
    return this.http.get(`${this.AllEvents}`);
  }

  getEventById(id:any){
    return this.http.get(`${this.EventById}/${id}`);
  }
}
