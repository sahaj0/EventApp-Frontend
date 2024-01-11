import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AllEvents } from '../eventModel/AllEvents';
import { HomeServiceService } from '../homeService/home-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { WishlistComponent } from 'src/app/wishlist/wishlist.component';
import { Event } from '../eventModel/Event';
import { WishlistService } from 'src/app/wishlist/service/wishlist.service';
import { LoginService } from 'src/app/login/loginService/login.service';
import { Venue } from '../eventModel/Venue';
import { Performers } from '../eventModel/Performers';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit ,AfterViewInit {

  constructor(private eventService:HomeServiceService, private snack:MatSnackBar,
    private router:Router,
    private dialog:MatDialog,private wishService:WishlistService,
    public loginSer:LoginService){
    
  }
  showEvent!:AllEvents | any;
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
   

  // wishlist:wishlist=new wishlist();

  current_user=this.loginSer.getUser();

  public displayedColumns :any[]= ['Id','Type','Date','Venue','Name','URL'
 ];

 public dataSource= new MatTableDataSource<AllEvents>();

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
   this.eventService.getAllEvents().subscribe((data:any)=>{
     console.log(data);
    //  console.log(data[0]);
     this.showEvent=data;
     
    
     this.dataSource=this.showEvent;
     console.log(this.showEvent);
     this.dataSource.paginator = this.paginator; 
    // console.log(this.dataSource);
    
   })
   
  }
  ngAfterViewInit(): void { 

    this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; 
      console.log(this.paginator);
      console.log(this.current_user);
    }

    doFilter(event: Event) {
      // const filterValue = (event.target as HTMLInputElement).value;
      // this.dataSource.filter = filterValue;
    }
    save(id:any){
      if(this.current_user==null){
        this.snack.open("Please login first!","",{
          duration:3000
       })
       this.router.navigate(['/login'])
        return ;
      }
   
    console.log(this.current_user);
   this.eventService.getEventById(id).subscribe((data:any)=>{
     console.log(data);
     this.wishService.addWishlist(data,this.current_user).subscribe((data:any)=>{
      Swal.fire("Added in your wishlist");
      console.log(data);
     },error=>{
       console.log(error);
     })

   })

    
    }
  

}
