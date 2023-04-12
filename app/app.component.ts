import { Component } from '@angular/core';

enum SeatStatus {
  Available = 'available',
  Booked = 'booked',
  Selected = 'selected',
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'RESERVATION';

  rows: Row[] = [];
   seats: { id: number; status: SeatStatus }[] = [];

  constructor() {
    // Initialize the seats
    
    let seatNumber = 1;
    for (let i = 0; i < 11; i++) {
      const row: Row = { seats: [] };
      for (let j = 0; j < 7; j++) {
        row.seats.push({ number: seatNumber.toString(), booked: false, selected: false });
        seatNumber++;
      }
      this.rows.push(row);
    }
    const lastRow: Row = { seats: [] };
    for (let j = 0; j < 3; j++) {
      lastRow.seats.push({ number: seatNumber.toString(), booked: false, selected: false });
      seatNumber++;
    }
    this.rows.push(lastRow);
  }
  selectSeat(seat: { id: number; status: SeatStatus }): void {
    if (seat.status === SeatStatus.Available) {
      seat.status = SeatStatus.Selected;
    } else if (seat.status === SeatStatus.Selected) {
      seat.status = SeatStatus.Available;
    }
  } 
  toggleSeatSelection(seat: Seat) {
    if (!seat.booked) {
      seat.selected = !seat.selected;
    }
  }
  bookSeats(): void {
    const selectedSeats = this.seats.filter(
      (seat) => seat.status === SeatStatus.Selected
    );
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    if (selectedSeats.length > 7) {
      alert('You cannot book more than 7 seats at a time.');
      return;
}
const consecutiveSeats = this.findConsecutiveSeats(selectedSeats);
    if (consecutiveSeats.length === selectedSeats.length) {
      selectedSeats.forEach((seat) => {
        seat.status = SeatStatus.Booked;
      });
    } else {
      alert('Sorry, we could not book your seats in one row. Trying to book nearby seats...');
      selectedSeats.forEach((seat) => {
        seat.status = SeatStatus.Available;
      });
      consecutiveSeats.forEach((seat) => {
        seat.status = SeatStatus.Booked;
      });
    }
  }

  findConsecutiveSeats(
    selectedSeats: { id: number; status: SeatStatus }[]
  ): { id: number; status: SeatStatus }[] {
    const sortedSeats = selectedSeats.sort((a, b) => a.id - b.id);
    let consecutiveSeats = [sortedSeats[0]];
    for (let i = 1; i < sortedSeats.length; i++) {
      if (sortedSeats[i].id === consecutiveSeats[consecutiveSeats.length - 1].id + 1) {
        consecutiveSeats.push(sortedSeats[i]);
      } else {
        break;
      }
    }
    return consecutiveSeats;
  }

  bookings = [
    { id: 1, name: 'John Doe', status: 'available' },
    { id: 2, name: 'Jane Doe', status: 'available' },
    { id: 3, name: 'Bob Smith', status: 'available' }
  ];

  confirmBooking() {
    // find the first booking with a status of "available" and update its status to "booked"
    const bookingToConfirm = this.bookings.find(booking => booking.status === 'available');
    if (bookingToConfirm) {
      bookingToConfirm.status = 'booked';
    }
  }

}
