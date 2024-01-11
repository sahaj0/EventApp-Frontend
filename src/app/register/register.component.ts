import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';
import { user } from './userModel/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  Questions = ["Favorite Animal ?","What's Your Pet Name ?","Your First School ?"];
 
  registerForm:any;
  user:user =new user();
  msg:any;
  types:any;
  constructor( private snack:MatSnackBar,  private register:UserService, private router:Router) { }
  change(e:any) {  
    this.types=e.target.value;
        console.log(e.target.value);  
      }
  ngOnInit(): void {
 
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
      confirmpassword: new FormControl('', Validators.required),
      SecertQuestions:new FormControl('',Validators.required),
      Answer:new FormControl('',Validators.required),
      mobileNo:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9]).{10,}$'),Validators.maxLength(10)])
    });
 
  }
 
  public showPassword: boolean = false;
 
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
 
  onSubmit(data:any): void {
    // display some fireworks
    const removeSpaceRgx = /^\s+|\s+$/g;
    console.log(data+"------");
    if(data.password!=data.confirmpassword){
alert("password should match");
    return;

    }
    this.user.username=data.username.replace(removeSpaceRgx, "");
    this.user.password=data.password.replace(removeSpaceRgx, "");
    this.user.confirmpassword=data.confirmpassword.replace(removeSpaceRgx, "");
    this.user.email=data.email.replace(removeSpaceRgx, "");
    this.user.question=data.SecertQuestions;
    this.user.answer=data.Answer.replace(removeSpaceRgx, "");
    this.user.number=data.mobileNo
    this.user.firstName=data.fname.replace(removeSpaceRgx, "");
    
    console.log(data.username,
      data.password,
      data.confirmpassword,
     data.email,
     data.SecertQuestions,
      data.Answer,
    data.mobileNo,
    data.fname
     +"------");

    
    this.register.addUser(this.user).subscribe(data=>{
       console.log(data);
       this.registerForm.reset();
        Swal.fire("Success");
       this.router.navigate(['/login']);
    },error=>{
      console.log(error)
      if(error instanceof HttpErrorResponse){
        // const errorMessage=new Array<{propName:String; errors:String}>();
         if(error.status==400){
           this.msg=data.email+" "+"is already present Try with another Email!";
         }
       }
       this.snack.open(this.msg,"",{
         duration:3000
      })
      })
      

  }
}
 
