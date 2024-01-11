import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

fdescribe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('register() should send a POST request to register', () => {

    const Register = {
      username: 'John123',
      password: '123',
      firstName: 'sam',
      confirmpassword:'123',
      role: 'ROLE_USER',
      email: 'test@email.com',
      mobileno:'9878282782',
      secretQuestion: 'What is your pet name ?',
      sercetAnswer: 'Tommy'
    };
    // const response = 'Success';
    service.addUser(Register).subscribe((res) => {
      expect(res).toEqual(Register);
    });
    const req = httpMock.expectOne('http://localhost:8081/api/v1.0/userProfile/addUser');
    expect(req.request.method).toBe('POST');
    req.flush(Register);
  });
});
