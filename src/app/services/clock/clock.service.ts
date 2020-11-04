import { Clock } from './../../../../../interfaces/clock.interface';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private clock: Observable<Clock>;
  constructor() {
    this.clock = new Observable((subscriber) => {
      setInterval(() => {
        const date = new Date();
        const clock: Clock = {
          second: date.getSeconds(),
          minute: date.getMinutes(),
          hour: date.getHours(),
        };
        
        subscriber.next(clock);
      }, 1000);
    });
  }

  get getTime() {
    return this.clock;
  }
}

