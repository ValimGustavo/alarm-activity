import { Activity } from './../../../../../../interfaces/activity.interface';
import { ActivityService } from './../../../services/activity.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-read',
  templateUrl: './activity-read.component.html',
  styleUrls: ['./activity-read.component.css']
})
export class ActivityReadComponent implements OnInit {

  constructor(
    private activityService:ActivityService
  ) { }

  activities:Activity[]
  ngOnInit(): void {
    this.activityService.read()
      .subscribe(activities => {
        this.activities = activities
      })
    
  }

}
