import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  konsumen:any
  simulasi:any

  pilihAsuransi:string = this.actRoute.snapshot.params['asuransi'];
  tenor:number = this.actRoute.snapshot.params['tenor'];
  otr:number = this.storageService.getOTR()
  sisa:number = this.storageService.getData().sisa_outstanding

  
  konsumenForm = new FormGroup({
    konsumen_nama: new FormControl('', [Validators.required]),
    konsumen_noHP: new FormControl('', [Validators.required]),
    konsumen_alamat: new FormControl('', [Validators.required]),
  })
  errorMessage: any;

  get konsumen_nama(){
    return this.konsumenForm.get('konsumen_nama')
  }
  get konsumen_noHP(){
    return this.konsumenForm.get('konsumen_noHP')
  }
  get konsumen_alamat(){
    return this.konsumenForm.get('konsumen_alamat')
  }

  constructor(private dataService : DataService, private actRoute : ActivatedRoute, private storageService : StorageService, private router: Router) { }

  ngOnInit(): void {
    this.dataSimulasi()
  }

  dataSimulasi(){
    return this.dataService.getsimulasi(this.tenor, this.otr, this.pilihAsuransi, this.sisa)
    .subscribe((res:any)=>{
      this.simulasi=res
      this.storageService.saveSimulasi(res)
      console.log(this.simulasi);
    })
  }

  // addBookingForm(){
  //   const {konsumen_nama, konsumen_noHP, konsumen_alamat} = this.konsumenForm.value

    
  //   return this.dataService.addBooking(konsumen_nama, konsumen_noHP, konsumen_alamat)
  //   .subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     err => {
  //       this.errorMessage = err.error.message
  //     }
  //   )
  // }

  
  addBookingForm(){
    const {konsumen_nama, konsumen_noHP, konsumen_alamat} = this.konsumenForm.value
    const konsumen_nokontrak = this.storageService.getData().no_kontrak;
    const jenisAsuransi = this.storageService.getSimulasi().jenisAsuransi
    const otr = this.storageService.getSimulasi().otr
    const tenor = this.storageService.getSimulasi().tenor
    const dpPersen = this.storageService.getSimulasi().dpPersen
    const dp = this.storageService.getSimulasi().dp
    const phAwal = this.storageService.getSimulasi().phAwal
    const rateAsuransi = this.storageService.getSimulasi().rateAsuransi
    const asuransi = this.storageService.getSimulasi().asuransi
    const bungaFlat = this.storageService.getSimulasi().bungaFlat
    const bungaJual = this.storageService.getSimulasi().bungaJual
    const tph = this.storageService.getSimulasi().tph
    const angsuran = this.storageService.getSimulasi().angsuran
    const provisiAdmin = this.storageService.getSimulasi().provisiAdmin
    const fidusia = this.storageService.getSimulasi().fidusia
    const cp = this.storageService.getSimulasi().cp
    const potongan = this.storageService.getSimulasi().potongan
    const totalPotongan = this.storageService.getSimulasi().totalPotongan
    const danaCair = this.storageService.getSimulasi().danaCair
    const danaCairMinET = this.storageService.getSimulasi().danaCairMinET

    
    return this.dataService.addBooking(konsumen_nokontrak, konsumen_nama, konsumen_noHP, konsumen_alamat, otr, tenor, jenisAsuransi, dpPersen, dp, phAwal, rateAsuransi, asuransi, bungaFlat, bungaJual, tph, angsuran, provisiAdmin, fidusia, cp, potongan, totalPotongan, danaCair, danaCairMinET)
    .subscribe(
      data => {
        console.log(data)
        this.gotoThanks()
      },
      err => {
        this.errorMessage = err.error.message
      }
    )
  }

  gotoThanks(){
    this.router.navigate(['/thanks'])
}


}
