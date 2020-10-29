import { ActivityService } from './../../../services/activity.service';
import { Goal } from './../../../../../../interfaces/Goal.interface';
import { Activity } from './../../../../../../interfaces/activity.interface';
import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css'],
})
export class ActivityCreateComponent implements OnInit, OnChanges {
  activity: Activity = {
    title: 'Titulo da atividade a ser criada',
    description: 'descricao da atividade a ser criada',
    goals: [],
    postActivity: null,
    preActivity: null,
    time: {
      start: '09:40:00',
      ends: '10:30:00',
    },
  };

  showCreateGoal = false;
  constructor(
    private http: HttpClient,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {}

  goalListen(goal: Goal) {
    this.activity.goals.push(goal);
    console.log(this.activity);
    this.showCreateGoal = false;
  }

  ngOnChanges(){
    console.log(this.activity)
  }
  save() {
    
    this.activityService.save(this.activity);
  }

  createGoal() {
    this.showCreateGoal = this.showCreateGoal ? false : true;
  }
}
