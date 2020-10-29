import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from  '../../../../../../interfaces/Goal.interface'
import { Time } from '../../../../../../interfaces/time.interface';

@Component({
  selector: 'app-goal-create',
  templateUrl: './goal-create.component.html',
  styleUrls: ['./goal-create.component.css']
})
export class GoalCreateComponent implements OnInit {

  goal:Partial<Goal> = {
    title: 'titulo de teste',
    description:'Uma pequena descriçao para testar o campo descricao',
  }

  @Output() event = new EventEmitter<Partial<Goal>>()
  constructor() { }

  ngOnInit(): void {
  }

  createGoal(){
    if(this.goal.timeForExecution){
      this.event.emit(this.goal)
    }else{
      alert('Necessario salvar os horarios')
    }
  }

  getTime(time:Time){
    this.goal.timeForExecution = time
  }



}
