import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private logSer:LoginService) { }
  
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq=req;
    const token=this.logSer.getToken();

    if(token!=null ){
            authReq=authReq.clone({
              setHeaders:{
                Authorization:`Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            });
            
    }

    
    // console.log(authReq.headers+"form interceptor")
    // console.log(token+"form get token ");
    return next.handle(authReq);
    // let head=req.clone({
    //   setHeaders:{
    //     Authorization:`bearer ${token}`,
        
    //     // Content-Type : 'application/json; charset=utf-8'
    //   }
    // })
   
    
   
  }
}


