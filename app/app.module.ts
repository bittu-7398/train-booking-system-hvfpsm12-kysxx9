import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TicketBookingModule } from './ticket-booking/ticket-booking.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ENV_IMPORTS } from './environment';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TicketBookingModule, ...ENV_IMPORTS ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
