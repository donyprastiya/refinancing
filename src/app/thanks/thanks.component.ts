import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor(private dataService : DataService, private actRoute : ActivatedRoute, private storageService : StorageService, private router: Router) { }


  kontrak:string = this.storageService.getData().no_kontrak
  isi:any
  data:any

  ngOnInit(): void {
    this.setStatusPengajuan()
    this.getBooking()
  }

  close_window() {
    window.open('', '_self', '')
    window.close();
  }

  setStatusPengajuan(){
    return this.dataService.setPengajuan(this.kontrak)
    .subscribe(
      (res:any) => {
        this.isi = res
        console.log(this.isi)
      })
  }

  getBooking(){
    return this.dataService.getbykontrak2(this.kontrak)
    .subscribe(
      (res:any) => {
        this.data = res
        console.log(this.data)
      })
  }
  

}
