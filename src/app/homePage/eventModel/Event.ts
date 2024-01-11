import { Performers } from "./Performers";
import { Venue } from "./Venue";

export class Event{
    
    id!:number;
    type!:String;
    datetime_utc!:Date;
    venue!:Venue;
    performers!:Performers[];

    

}