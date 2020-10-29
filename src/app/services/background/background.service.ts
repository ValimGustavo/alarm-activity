import { Activity } from './../../../../../interfaces/activity.interface';
import { Clock } from './../../../../../interfaces/clock.interface';
import { ClockService } from './../clock/clock.service';
import { ActivityService } from './../activity.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(
    private activityService:ActivityService,
    private clockService:ClockService
  ) { }


  clock: Clock
  activities: Activity[]
  checkActivity(){
    this.clock = this.clockService.running()

    this.activityService.read()
      .subscribe(activities=> {
        this.activities = activities
      })
  }


}
