import { Time } from './../../../../../../interfaces/time.interface';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-create',
  templateUrl: './time-create.component.html',
  styleUrls: ['./time-create.component.css']
})
export class TimeCreateComponent implements OnInit {

  constructor() { }
  time:Time = {
    start: '00:00:00',
    ends: '00:00:00'
  }

  @Output() event = new EventEmitter<Time>()

  ngOnInit(): void {
  }

  save(){
   this.event.emit(this.time)
  }
}
