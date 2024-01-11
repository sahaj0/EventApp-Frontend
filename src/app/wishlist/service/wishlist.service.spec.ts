import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';

fdescribe('WishlistService', () => {
  let service: WishlistService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WishlistService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('getWishListbyName should send a Get request ', () => {

    const wish = {

      name:'sam',
      Event:[{
        id:1,
        type:"String",
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
        ]

      }
    
    ]
       
      
    };
    

    // const response = 'Success';
    service.getWishlistByName(name).subscribe((res) => {

      expect(res).toEqual(wish);

    });

    const req = httpMock.expectOne(`http://localhost:8082/getWishlistById/${name}`);

    expect(req.request.method).toBe('GET');

    req.flush(wish);

  });

 


});
