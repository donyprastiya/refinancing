import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-simulasi',
  templateUrl: './simulasi.component.html',
  styleUrls: ['./simulasi.component.css']
})
export class SimulasiComponent implements OnInit {

  simulasi12:any
  simulasi24:any
  simulasi36:any
  simulasi48:any
  time:string | undefined 
  pilihAsuransi:string = this.actRoute.snapshot.params['id'];
  otr:number = this.storageService.getOTR()
  sisa:number = this.storageService.getData().sisa_outstanding
  kontrak:string = this.storageService.getData().no_kontrak

  constructor(private dataService : DataService, private actRoute : ActivatedRoute, private storageService : StorageService) { }

  ngOnInit(): void {
    this.dataSimulasi12()
    this.dataSimulasi24()
    this.dataSimulasi36()
    this.dataSimulasi48()
    this.dateTime()
  }

  dataSimulasi12(){
    return this.dataService.getsimulasi(12, this.otr, this.pilihAsuransi, this.sisa)
    .subscribe((res:any)=>{
      this.simulasi12=res
      console.log(this.simulasi12);
    })
  }

  dataSimulasi24(){
    return this.dataService.getsimulasi(24, this.otr, this.pilihAsuransi, this.sisa)
    .subscribe((res:any)=>{
      this.simulasi24=res
      console.log(this.simulasi24);
    })
  }

  dataSimulasi36(){
    return this.dataService.getsimulasi(36, this.otr, this.pilihAsuransi, this.sisa)
    .subscribe((res:any)=>{
      this.simulasi36=res
      console.log(this.simulasi36);
    })
  }

  dataSimulasi48(){
    return this.dataService.getsimulasi(48, this.otr, this.pilihAsuransi, this.sisa)
    .subscribe((res:any)=>{
      this.simulasi48=res
      console.log(this.simulasi48);
    })
  }

  dateTime(){
    return this.dataService.getDateTime()
    .subscribe((res:any)=>{
      this.time=res
      console.log(this.time);
    })
  }
}
