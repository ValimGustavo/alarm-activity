import { Goal } from './../../../../../interfaces/goal.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }


   sumAllGoals(goals:Goal[]){
    const firstGoalTime = goals[0].timeForExecution
    const lastGoalTime = goals.pop().timeForExecution



  }

}

function transformTimerInSeconds(timer:string){
  const timerSplited = timer.trim().split(':')
  const hours = parseInt(timerSplited[0])
  const minutes = parseInt(timerSplited[1])
  const seconds = parseInt(timerSplited[2])

  return seconds + (minutes * 60) + (hours * 3600)
  
}
