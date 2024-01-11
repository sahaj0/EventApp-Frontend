import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatSnackBarModule,RouterTestingModule],
    });
    service = TestBed.inject(LoginService);
    httpMock=TestBed.inject(HttpTestingController);
  });
  afterEach(()=>{
    httpMock.verify();
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('login should send a post request ', () => {

    
    const user = {
     username:"a",
     password:"a",   
    }
   ;

    // const response = 'Success';
    service.login(user).subscribe((res) => {

      expect(res).toEqual(user);

    });

    const req = httpMock.expectOne(`http://localhost:8083/auth/v1/login`);

    expect(req.request.method).toBe('POST');

    req.flush(user);

  });

});
