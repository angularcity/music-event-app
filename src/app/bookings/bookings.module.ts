import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookingsComponent } from "./bookings.component";
import { BookingCardComponent } from "./booking-card/booking-card.component";

@NgModule({
  declarations: [BookingsComponent, BookingCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BookingsComponent, BookingCardComponent]
})
export class BookingModule {}
