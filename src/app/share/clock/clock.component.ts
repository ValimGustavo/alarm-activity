import { SpeechTextService } from './../../services/speech-text/speech-text.service';
import { BackgroundService } from './../../services/background/background.service';
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
    private clockService: ClockService,
    private backgroundService:BackgroundService,
    private speechTextService:SpeechTextService
  ) {
    
   }

  clock: Clock
  running:any
  ngOnInit(): void {
    this.clockService.getTime.subscribe((clock)=> {
      this.clock = clock
    })
  }

  NameActivity(){
    this.backgroundService.checkActivity().subscribe(activity => {
      console.log(activity)
      this.speechTextService.speak(activity.title)
    })
  }


}
