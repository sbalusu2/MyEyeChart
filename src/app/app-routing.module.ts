import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'appointments/:email', loadChildren: './appointments/appointments.module#AppointmentsPageModule' },
  { path: 'orders/:email', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'prescriptions', loadChildren: './prescriptions/prescriptions.module#PrescriptionsPageModule' },
  { path: 'locations/:id', loadChildren: './location-detail/location-detail.module#LocationDetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
