import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA,NgModule} from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ForgetComponent } from './forget.component';
import { ForgetService } from './forget.service';
import { AppComponent } from "../app.component";
import { RouterTestingModule } from "@angular/router/testing";
 
fdescribe('ForgetComponent', () => {
  let forgetComponent:ForgetComponent;
  let fixture: ComponentFixture<ForgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule,MatSnackBarModule,ReactiveFormsModule,RouterTestingModule]
  }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetComponent);
    forgetComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(ForgetComponent).toBeDefined();
  });
 
});
