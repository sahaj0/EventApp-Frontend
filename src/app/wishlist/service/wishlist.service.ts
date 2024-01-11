import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../model/Event';
import { wishlist } from '../model/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

baseurl="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/saveList/wishlist";


  //baseurl="http://100.22.13.200:8083/auth/v1/addUser";

getbyName="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/getWishlist"

delete="https://1q7wtjssie.execute-api.us-east-1.amazonaws.com/test/deleteWishlist/remove-event"

  addWishlist(Event:Event,username:any){
    

    // return this.http.post(`${this.baseurl}/${username}`);
    return this.http.post(`${this.baseurl}/${username}`,Event);
  }

  getWishlistByName(username:any){
    return this.http.get(`${this.getbyName}/${username}`)
  }
 
  deleteById(username:any,id:String){
    const params=new HttpParams().set('username',username).set('eventId',id.toString());
    return this.http.delete(`${this.delete}`,{params});
  }

}
