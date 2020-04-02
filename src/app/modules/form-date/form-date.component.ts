import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { Time } from '../../shared/model/time-zone';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.css']
})
export class FormDateComponent implements OnInit {
  public selectedDate:Date ;
  timez:Time[];
  constructor() { }

  ngOnInit(): void {
    this.getDiffrentTimeZone();
  }

  // function for change date
public selectedDateValue(val:Date):void{
  this.selectedDate = val;
  this.getDiffrentTimeZone();
}
// function to get the timezone
 private getDiffrentTimeZone():void{
    
    this.timez=[
    {id:1,name:"IST", time:moment(this.selectedDate).utcOffset("+05:30").format("M/DD/YYYY, hh:mm A")},
    {id:2,name:"PST", time:moment(this.selectedDate).utcOffset("-08:00").format("M/DD/YYYY, hh:mm A")},
    {id:3,name:"Mountain Time", time:moment(this.selectedDate).utcOffset("-07:00").format("M/DD/YYYY, hh:mm A")},
    {id:4,name:"UTC", time:moment(this.selectedDate).utc().format("M/DD/YYYY, hh:mm A")},
    {id:5,name:"CST", time:moment(this.selectedDate).utcOffset('-06:00').format("M/DD/YYYY, hh:mm A" )},
  ]
  }


}
