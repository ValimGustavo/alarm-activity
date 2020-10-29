import { ClockService } from './../../services/clock/clock.service';
import { Clock } from './../../../../../interfaces/clock.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor(
    private clockService: ClockService
  ) {
    
   }

  clock: Clock
  running:any
  ngOnInit(): void {
    

    this.clock = this.clockService.time

    this.running = setInterval(() => {
      this.clock = this.clockService.running()
    }, 1000)
  }



}
