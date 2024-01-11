import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA,NgModule} from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Home1Component } from "./home1.component";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
 
fdescribe('Home1Component', () => {
    let jobDetailsComponent:Home1Component;
    let fixture: ComponentFixture<Home1Component>;
 
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Home1Component],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [HttpClientTestingModule,MatSnackBarModule,ReactiveFormsModule]
    }).compileComponents();
    }));
 
    beforeEach(() => {
      fixture = TestBed.createComponent(Home1Component);
      jobDetailsComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
 
    it('Component is working', () => {
      expect(Home1Component).toBeDefined();
    });
});
 