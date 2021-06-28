import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageFlightsComponent } from './manage-flights/manage-flights.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageSchedulesComponent } from './manage-schedules/manage-schedules.component';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ModalModule } from './_modal';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        appRoutingModule,
        ModalModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger'
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        BookFlightsComponent,
        BookingHistoryComponent,
        ManageFlightsComponent,
        ManageAirlinesComponent,
        ManageSchedulesComponent,
        ManageDiscountsComponent,
        ReportsComponent,
        CheckoutComponent
        ,
        RegisterComponent,
        CheckoutComponent,
        ScheduleFlightComponent,
        ConfirmBookingComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }