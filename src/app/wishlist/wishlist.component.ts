import { Component, Inject, OnInit } from '@angular/core';
import { wishlist } from './model/wishlist';
import { CommonModule } from '@angular/common';  
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../login/loginService/login.service';
import { WishlistService } from './service/wishlist.service';
import { Event } from './model/Event';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public loginSer:LoginService,private wishService:WishlistService){

  }
  panelOpenState = false;
  public displayedColumns :any[]= ['Id','Type','Date','Venue','Name','Delete'
];
public dataSource= new MatTableDataSource<wishlist>();
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
current_user=this.loginSer.getUser();
fav!:Event|any;
empty:number=0;
ngOnInit(): void {
  console.log(this.fav);
  if(this.fav==null){
    this.empty=1;
console.log("null");
  }
  if(this.current_user!=null){
    this.wishService.getWishlistByName(this.current_user).subscribe((data:any)=>{
      console.log(data);
      this.fav=data;
      console.log(this.fav+"----");
      
    },error=>{
      console.log(error);
    })
  }
}

Delete(id:any){
console.log(id);
this.wishService.deleteById(this.current_user,id).subscribe((data)=>{
  console.log(data);
  Swal.fire("Done");
  window.location.reload();
  


},error=>{
  
  console.log(error);
})
}

}
