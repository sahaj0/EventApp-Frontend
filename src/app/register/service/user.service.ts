import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }

baseurl="http://34.238.2.45:8081/api/v1.0/userProfile/addUser";
 //  baseurl= "https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/addUser"
  //baseurl="http://100.22.13.200:8083/auth/v1/addUser";


  addUser(user:any){
    return this.http.post(`${this.baseurl}`,user);
  }
}
