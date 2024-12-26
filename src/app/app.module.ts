import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { CalendarComponentComponent } from './components/calendar-component/calendar-component.component';
import { NotificationComponentComponent } from './components/notification-component/notification-component.component';
import { PopupComponentComponent } from './shared/popup-component/popup-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserComponentComponent,
    DashboardComponentComponent,
    CalendarComponentComponent,
    NotificationComponentComponent,
    PopupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
