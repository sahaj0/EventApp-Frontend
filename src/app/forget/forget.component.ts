import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetService } from './forget.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { user } from '../register/userModel/user';
import { LoginService } from '../login/loginService/login.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit  {
  constructor(private loginSer:LoginService,private forgetSer:ForgetService,private router:Router,private snack:MatSnackBar) { }
  Questions = ["Favorite Animal ?","What's Your Pet Name ?","Your First School ?"];
  types:any;
  resetForm:any;
  user:user=new user();
  change(e:any) {  
    this.types=e.target.value;
        console.log(e.target.value);  
      }
      ngOnInit(): void {
 
        this.resetForm = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email]),
         
          password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
          confirmpassword: new FormControl('', Validators.required),
          SecertQuestions:new FormControl('',Validators.required),
          Answer:new FormControl('',Validators.required),
         
        });
     
      
      }

      onSubmit(data:any) {
        this.user.username=this.loginSer.getUser();
          this.user.email=data.email;
          this.user.password=data.password;
          this.user.confirmpassword=data.confirmpassword;
          this.user.question=this.types;
          this.user.answer=data.Answer;
        console.log(this.user);
        this.forgetSer.forget(this.user).subscribe((data)=>{
          console.log(data);
          Swal.fire("Your Password has been updated");
          this.router.navigate(['/login']);
         },error=>{
           console.log(error);
           if(error instanceof HttpErrorResponse){
            // const errorMessage=new Array<{propName:String; errors:String}>();
             if(error.status==400){
              this.snack.open("your secret question is wrong Please choose correct one!","",{
                duration:3000
             })
             }
             if(error.status==403){
              this.snack.open("your anwser is wrong Please enter correct one!","",{
                duration:3000
             })
             }
             if(error.status==404){
              this.snack.open("Invalid user!","",{
                duration:3000
             })
             }
           }
         
         })
      }
}
