import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component'
import { ManageFlightsComponent } from './manage-flights/manage-flights.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { ManageSchedulesComponent } from './manage-schedules/manage-schedules.component';
import { ManageDiscountsComponent } from './manage-discounts/manage-discounts.component';
import { ReportsComponent } from './reports/reports.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'book',
        component: BookFlightsComponent
    },
    {
        path: 'history',
        component: BookingHistoryComponent
    },
    {
        path: 'manageFlights',
        component: ManageFlightsComponent
    },
    {
        path: 'manageAirlines',
        component: ManageAirlinesComponent
    },
    {
        path: 'manageSchedules',
        component: ManageSchedulesComponent
    },
    {
        path: 'manageDiscounts',
        component: ManageDiscountsComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'scheduleFlight/:id',
        component: ScheduleFlightComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);