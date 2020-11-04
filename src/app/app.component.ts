import { Activity } from './../../../interfaces/activity.interface';
import { Component } from '@angular/core';
import { BackgroundService } from './services/background/background.service';
import { SpeechTextService } from './services/speech-text/speech-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  activityInMoment: Activity | null = null
  constructor(
    private backgroundService: BackgroundService,
    private speeker: SpeechTextService
  ) {
    this.backgroundService.checkActivity().subscribe((activityStarted) => {
      console.log(activityStarted)
      if(!this.activityInMoment || this.activityInMoment.id != activityStarted.id){
        this.activityInMoment = activityStarted
        const message = `Ola, Gustavo, Estamos na seguinte atividade ${activityStarted.title}`
        this.speeker.speak(message);
      }
    });
  }
}
