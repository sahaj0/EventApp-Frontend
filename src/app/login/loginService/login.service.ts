import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }

  baseurl="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/login";
  validate="http://34.238.2.45:8083/auth/v1/validate";

  // baseurl="http://100.22.13.200:8082/call/consumer/login";
 // baseurl =" https://xiiqo00elk.execute-api.us-west-2.amazonaws.com/test/userlogin";
  
  username:any;
  current_user:any;
  role:any;

 

  login(user:any):Observable<any>{
    return this.http.post(`${this.baseurl}`,user)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }
  tokenValidate(){
    let token = 'Bearer '+ localStorage.getItem('token')
    this.validateToken(token).subscribe({
      next: (v) => {
      },
      error: (e) => {console.error('e') , localStorage.removeItem('token')},
      complete: () => {console.info('complete')}
     });

    return token;
  }

  validateToken(token:any): Observable<any> {
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<any>(`${this.validate}`, { headers });
  }
  
// private handleError(error:HttpErrorResponse){
//   let errorMessage='An unknown error occurred';
//   if(error.error instanceof ErrorEvent){
//     errorMessage=`Error: ${error.error}`
//   }
// }

  public  getUser(){
    
    return sessionStorage.getItem('user');
    }

    public setUser(user:any){
       sessionStorage.setItem('user',user.username);
     
      }

      
      public isLoggedIn(){
        this.current_user=sessionStorage.getItem('user');
        if(this.current_user!=null ){
          return true;
        } 
        else 
        return false;
      
        }

   public logout(){
     localStorage.removeItem('token');
     sessionStorage.removeItem('user');
     sessionStorage.removeItem('role');
     sessionStorage.removeItem('token');
     return true;
   }     

   public setToken(token:any){
return sessionStorage.setItem('token',token);
   }

public getToken(){
  return sessionStorage.getItem('token');

}

public getRole(){
  return sessionStorage.getItem('role');
}
 public setRole(data:any){
   return sessionStorage.setItem('role',data);
 }

 public isAdmin(){
   let role=sessionStorage.getItem('role');
   
   if(role==='Admin'){
    return true;
   }
   return false;
 }


}
