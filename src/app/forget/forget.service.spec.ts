import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ForgetService } from './forget.service';

fdescribe('ForgetService', () => {
  let service: ForgetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ForgetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should send a PUT request to forgot', () => {

    const user = { id:1,username:'sam',
    email: 'John123', 
    password: '123', 
    answer: 'Tom' ,
    question:'hello',
    firstName:'sam', 
    confirmpassword:'a',
     mobileno:'a', 
     role:'u'
   };
    const response = 'Success';
    service.forget(user).subscribe((res:any) => {

      expect(res).toEqual(response);

    });
    const req = httpMock.expectOne(

      'http://localhost:8081/api/v1.0/userProfile/forget'

    );

    expect(req.request.method).toBe('PUT');
    req.flush(response);

  });
});
