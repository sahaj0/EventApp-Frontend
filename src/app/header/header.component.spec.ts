import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import Swal from 'sweetalert2';
import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule] // Add other necessary modules
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,HeaderComponent],
      imports:[HttpClientTestingModule,MatSnackBarModule,RouterTestingModule,MatToolbarModule,
      MatIconModule,MatMenuModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
  
  fit('should log current_user in ngOnInit', () => {
    spyOn(console, 'log'); // Spy on console.log
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith(component.current_user);
  });
 
//   it('should show a SweetAlert when show method is called', () => {
//     spyOn(console, 'log'); // Spy on console.log
//     spyOn(window,'Swal'); // Spy on SweetAlert function
 
//     component.current_user = 'testUser'; // Set a dummy user for testing
// component.show();
 
//     expect(console.log).toHaveBeenCalledWith('hello');
//     expect(window.Swal).toHaveBeenCalledWith({
//       text: 'Hii testUser',
//       position: 'top-end',
//       imageUrl: '../../assets/img_avatar.png',
//       imageWidth: 300,
//       imageHeight: 200
//     });
//   });

});
