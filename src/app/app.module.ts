import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './homePage/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { DateFormatPipe } from './parserDate';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import{MatToolbarModule}from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Home1Component } from './home1/home1.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { TokenService } from './Interceptor/token.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetComponent } from './forget/forget.component';
import{MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import { AllUsersDetailsComponent } from './all-users-details/all-users-details.component';
import { CommonModule } from '@angular/common';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateFormatPipe,
    HeaderComponent,
    Home1Component,
    RegisterComponent,
    LoginComponent,
    WishlistComponent,
    ForgetComponent,
    FooterComponent,
    AllUsersDetailsComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    LoggerModule.forRoot({
      level:NgxLoggerLevel.DEBUG,
      serverLogLevel:
      NgxLoggerLevel.ERROR
    })
    
  
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
