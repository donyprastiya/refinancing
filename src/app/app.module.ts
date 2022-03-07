import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendaraanComponent } from './kendaraan/kendaraan.component';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { FormComponent } from './form/form.component';
import { ThanksComponent } from './thanks/thanks.component';
import { DetailhitunganComponent } from './detailhitungan/detailhitungan.component';
import { KontrakComponent } from './kontrak/kontrak.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KendaraanComponent,
    SimulasiComponent,
    FormComponent,
    ThanksComponent,
    DetailhitunganComponent,
    KontrakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
