import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/loginService/login.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public loginSer:LoginService) { }


  current_user=this.loginSer.getUser();
  admin=this.loginSer.isAdmin();



  
  ngOnInit(): void {
    let a=sessionStorage.getItem('role');
  
 this.verifyToken();
    if(this.loginSer.getRole()!==a){
        sessionStorage.removeItem('token');
    }
    console.log(this.current_user);
    
  }


  verifyToken() {
    const isCheck: Map<string, string> = new Map<string, string>();
    // isCheck.set(this.username, 'User');
    // this.isC = new isChecker();
    let token = this.loginSer.getToken(); 
    if(token===null){
      return;
    }
    this.loginSer.validateToken(token).subscribe({
      next: (v:any) => {
        console.log(JSON.stringify(v)+"-----+++");
        
        const jsonString = JSON.stringify(v)
        const a = jsonString.slice(2,6)
        const r=jsonString.slice(9,13);
        console.log(a+"---"+r)
        console.log(this.current_user);
        if (this.current_user !== a || this.loginSer.getRole()!==r){
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('role')
          window.location.reload();
          
        }
        console.log();
      },
      error: (e) => { 
            console.error(e); this.loginSer.logout();
            window.location.reload();
        
        
     },
      complete: () => console.info('complete')
    });
  }

 
  show(){
    console.log("hello")
    
    Swal.fire({
      text :"Hii" +" "+ this.current_user+" ",
    position: 'top-end',
    imageUrl: '../../assets/img_avatar.png',
    imageWidth: 300,
    imageHeight: 200
    
  });
  }


  logout(){
    this.loginSer.logout();
    window.location.reload();
  }
}
