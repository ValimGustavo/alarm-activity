import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalCreateComponent } from './components/goal/goal-create/goal-create.component';
import { FormsModule } from '@angular/forms';
import { ActivityCreateComponent } from './components/activity/activity-create/activity-create.component';
import { TimeCreateComponent } from './share/time/time-create/time-create.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityReadComponent } from './components/activity/activity-read/activity-read.component';
import { ClockComponent } from './share/clock/clock.component'

@NgModule({
  declarations: [
    AppComponent,
    GoalCreateComponent,
    ActivityCreateComponent,
    TimeCreateComponent,
    NavbarComponent,
    ActivityReadComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
