import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { user } from '../register/userModel/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginService } from '../login/loginService/login.service';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  constructor( private snack:MatSnackBar, 
    private router:Router,private loginService:LoginService
   ) { }

  signUpButton:any
 
 signInButton :any
 container :any
 loginForm:any;
 user:user =new user();

 ngOnInit(): void {

  this.loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });

}

 a() {
  console.log("hello")
  this. signUpButton = document.querySelector('signUp');
  this. signInButton = document.querySelector('signIn');
 this. container = document.getElementById('container');
  
 
 this.signUpButton=document.getElementById('signUp')?.addEventListener('click',()=>{
    this.container.classList.add('right-panel-active');});

 this. signInButton = document.getElementById('signIn')?.addEventListener('click',()=>{
  this.container.classList.remove('right-panel-active');
 })
}

  // signUpButton.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });
  
  // signInButton.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });
  // }

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });

login(data:any){
  const removeSpaceRgx = /^\s+|\s+$/g;
  
  if(data!=null){
    this.user.username=data.name.replace(removeSpaceRgx, "")
    this.user.password=data.password.replace(removeSpaceRgx, "")
    console.log(this.user);
    this.loginService.login(this.user).subscribe((data:any)=>{
      console.log(data);
 
  
   // alert("something")
 
 //  localStorage.setItem('token',data.jwtToken);
 sessionStorage.setItem('token',data.jwtToken);
 this.loginService.setUser(this.user);
  this.loginService.setRole(data.role);
    
     // this.loginService.setUser(this.user);
 
     // this.loginForm.reset();
    // window.location.reload();
     Swal.fire("Success");

     this.router.navigate([''])
    
 
    },(error:any)=>{
     console.log(error);
     if(error instanceof HttpErrorResponse){
       // const errorMessage=new Array<{propName:String; errors:String}>();
        if(error.status==401){
         this.snack.open("Invalid Username and Password","",{
           duration:3000
        })
        }
       //  if(error.status==400){
       //   this.snack.open("Invalid Username and Password","",{
       //     duration:3000
       //  })
       //  }
      }
     
     
   
     
     }
    
    )
  }

  
   
   
   
  

 }

}
