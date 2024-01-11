import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeServiceService } from './home-service.service';

describe('HomeServiceService', () => {
  let service: HomeServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatSnackBarModule,RouterTestingModule],
      providers:[HomeServiceService]
    });
    service = TestBed.inject(HomeServiceService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('getAllEvents should send a Get request ', () => {

    
    const getEvent = {
      id:1,
      type: "Kingdom",
      Venue:{
        state:"a",
    name:"String",
    url:"String",
    address:"String",
    country:"String",
    has_upcoming_events:"String",
    city:"String"

      },
      Performers:[
        {
          name:"a",
    type:"String",
    image:"String",
        }
      ],
    }
   ;

    // const response = 'Success';
    service.getAllEvents().subscribe((res) => {

      expect(res).toEqual(getEvent);

    });

    const req = httpMock.expectOne(`http://localhost:8084/event/allEvents`);

    expect(req.request.method).toBe('GET');

    req.flush(getEvent);

  });

  fit('getEventById should send a Get request ', () => {

    const mockId=1;
    const getEvent = {
      type: "Kingdom",
      Venue:{
        state:"a",
    name:"String",
    url:"String",
    address:"String",
    country:"String",
    has_upcoming_events:"String",
    city:"String"

      },
      Performers:[
        {
          name:"a",
    type:"String",
    image:"String",
        }
      ],
    }
   ;

    // const response = 'Success';
    service.getEventById(mockId).subscribe((res) => {

      expect(res).toEqual(getEvent);

    });

    const req = httpMock.expectOne(`http://localhost:8084/event/getEventById/${mockId}`);

    expect(req.request.method).toBe('GET');

    req.flush(getEvent);

  });

});
