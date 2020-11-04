import { ACTIVITY } from './../../constants/acitivity.constant';
import { Observable } from 'rxjs';
import { Activity } from './../../../../../interfaces/activity.interface';
import { Clock } from './../../../../../interfaces/clock.interface';
import { ClockService } from './../clock/clock.service';
import { ActivityService } from './../activity.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private activities: Activity[]

  constructor(
    private activityService: ActivityService,
    private clockService: ClockService
  ) {
    this.activityService.read().subscribe((activities) => {
      this.activities = activities
    });
  }


  checkActivity():Observable<Activity> {
    return new Observable((subscriber) => {     
        this.clockService.getTime.subscribe((clock) => {
          for (let activity of this.activities) {
            const inActivity = statusActivity(clock, activity)
    
            if(ACTIVITY.STARTED === inActivity){
              console.log(activity)
              subscriber.next(activity);
            }            
          }
        });
    });
  }
}

function statusActivity(clock: Clock, activity: Activity) {
  let time = '';
  time += clock.hour < 10 ? `0${clock.hour}:` : `${clock.hour}:`;
  time += clock.minute < 10 ? `0${clock.minute}:` : `${clock.minute}:`;
  time += clock.second < 10 ? `0${clock.second}` : `${clock.second}`;

  console.log(time);

  if (time < activity.time.start) {
    return ACTIVITY.NOT_START;
  } else if (time > activity.time.ends) {
    return ACTIVITY.END;
  } else {
    return ACTIVITY.STARTED;
  }
}
