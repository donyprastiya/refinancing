import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailhitunganComponent } from './detailhitungan/detailhitungan.component';
import { FormComponent } from './form/form.component';
import { KendaraanComponent } from './kendaraan/kendaraan.component';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: 'datakendaraan', component: KendaraanComponent },
  { path: 'simulasi', component: SimulasiComponent },
  { path: 'form', component: FormComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'detail', component: DetailhitunganComponent },
  { path: '', redirectTo: 'datakendaraan', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
