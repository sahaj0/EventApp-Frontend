import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

 // baseurl="http://18.232.224.191:8081/api/v1.0/userProfile/getAllUser"
 baseurl="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/getAllUser/getAllUser"

  getAllUser(){
     return this.http.get(`${this.baseurl}`)
  }
}
