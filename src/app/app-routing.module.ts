import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './admin.guard';
import { AllUsersDetailsComponent } from './all-users-details/all-users-details.component';
import {  AuthGuardGuard } from './auth.guard';
import { ForgetComponent } from './forget/forget.component';
import { Home1Component } from './home1/home1.component';
import { HomeComponent } from './homePage/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:Home1Component},
  {path:"login",component:LoginComponent},
  {path:"wishlist",component:WishlistComponent,canActivate:[AuthGuardGuard]},
  {path:"register",component:RegisterComponent},
  {path:"forget",component:ForgetComponent},
  {path:"allUser",component:AllUsersDetailsComponent,canActivate:[adminGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
