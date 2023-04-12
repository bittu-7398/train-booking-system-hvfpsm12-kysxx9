import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
     ReactiveFormsModule
  ],
  declarations: [BookTicketComponent],
  exports: [BookTicketComponent]
})
export class TicketBookingModule { }