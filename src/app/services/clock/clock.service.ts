import { Clock } from './../../../../../interfaces/clock.interface';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  constructor() {
    const date = new Date()
    this.clock = {
      seconds: date.getSeconds(),
      minute: date.getMinutes(),
      hour: date.getHours()
    }
  }

  private clock: Clock;
  
  set time(clock: Clock) {
    this.clock = clock;
  }

  get time() {
    return this.clock;
  }

  running() {
    if (this.clock.seconds === 59) {
      this.clock.seconds = 0;
      if (this.clock.minute === 59) {
        this.clock.minute = 0;

        if (this.clock.hour === 23) {
          this.clock.hour = 0;
        } else {
          this.clock.hour++;
        }
      } else {
        this.clock.minute++;
      }
    } else {
      this.clock.seconds++;
    }
    return this.clock
  }

 
}
