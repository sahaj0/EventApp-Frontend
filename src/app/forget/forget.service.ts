import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../register/userModel/user';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http:HttpClient) { }
  baseurl="http://34.238.2.45:8081/api/v1.0/userProfile/forget";
 // baseurl="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/forget"

  forget(user:user){
    console.log(user+"----")
    return this.http.put(`${this.baseurl}`,user);
  }
}
