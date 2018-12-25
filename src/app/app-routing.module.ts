import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'prescriptions', loadChildren: './prescriptions/prescriptions.module#PrescriptionsPageModule' },
  { path: 'locations/:id', loadChildren: './location-detail/location-detail.module#LocationDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
