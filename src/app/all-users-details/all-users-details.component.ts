import { Component, OnInit } from '@angular/core';
import { user } from '../register/userModel/user';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-all-users-details',
  templateUrl: './all-users-details.component.html',
  styleUrls: ['./all-users-details.component.css']
})
export class AllUsersDetailsComponent implements OnInit {

  constructor(private adminSer:AdminService){

  }

  user:user[]=[];
  public displayedColumns :any[]= ['UserName','Email'
];
  public dataSource= new MatTableDataSource<user>();
  cta:any;
  check:any;
  text:any;
  loginText:any;
  a(){
    this. cta = document.querySelector(".cta");
   this. check = 0;
   this.cta.addEventListener('click', (e:any)=>{
    this. text = e.target.nextElementSibling;
    this.loginText = e.target.parentElement;
   this. text.classList.toggle('show-hide');
   this. loginText.classList.toggle('expand');
    if(this.check == 0)
    {
       this. cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
       this. check++;
    }
    else
    {
        this.cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        this.check = 0;
    }
  })
  }
  ngOnInit(): void {
  
      }
fetch(){
  this.adminSer.getAllUser().subscribe((data:any)=>{
    console.log(data);
    this.user=data;
    console.log(this.user);
   },error=>{
 console.log(error);
   })  
}
}
