import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeServiceService } from '../homeService/home-service.service';



describe('HomeComponent', () => {
  let component: HomeComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[HttpClientTestingModule,MatSnackBarModule,
        RouterTestingModule,MatDialogModule,MatMenuModule,CommonModule,BrowserModule],
        providers:[HeaderComponent]
    });
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  afterEach(()=>{
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 

});
