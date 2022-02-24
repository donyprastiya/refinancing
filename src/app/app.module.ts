import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendaraanComponent } from './kendaraan/kendaraan.component';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { FormComponent } from './form/form.component';
import { ThanksComponent } from './thanks/thanks.component';
import { DetailhitunganComponent } from './detailhitungan/detailhitungan.component';

@NgModule({
  declarations: [
    AppComponent,
    KendaraanComponent,
    SimulasiComponent,
    FormComponent,
    ThanksComponent,
    DetailhitunganComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
