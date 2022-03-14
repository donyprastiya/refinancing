import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailhitunganComponent } from './detailhitungan/detailhitungan.component';
import { FormComponent } from './form/form.component';
import { KendaraanComponent } from './kendaraan/kendaraan.component';
import { KontrakComponent } from './kontrak/kontrak.component';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: 'kontrak', component: KontrakComponent },
  { path: 'datakendaraan/:kontrak', component: KendaraanComponent },
  { path: 'simulasi/:id', component: SimulasiComponent },
  { path: 'form/:asuransi/:tenor', component: FormComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'detail', component: DetailhitunganComponent },
  { path: '', redirectTo: 'kontrak', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
