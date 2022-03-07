import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-kendaraan',
  templateUrl: './kendaraan.component.html',
  styleUrls: ['./kendaraan.component.css']
})
export class KendaraanComponent implements OnInit {

  data:any
  selectedAsuransi:string = "comprehensive" 
  hitungDp:any
  hitungOtr:any
  otrHitung:number | undefined
  dp: number | undefined
  noKontrak:string = this.actRoute.snapshot.params['kontrak'];
  otr:number | undefined 
  tahun_kendaraan:any
  tahun:number | undefined

  constructor(private dataService:DataService, private actRoute : ActivatedRoute, private storageService : StorageService) { }

  ngOnInit(): void {
    this.noKontrak
    this.dataKontrak()
    this.otrSaatIni()
  }

  dataKontrak(){
    return this.dataService.showKontrak(this.noKontrak)
    .subscribe((res:any)=>{
        this.data=res
        this.storageService.saveData(res)
        this.dp = this.storageService.getData().otr * 30 / 100
        console.log(this.data)
    })
  }

  whenAsuransi(id:string){
    return this.selectedAsuransi = id
  }

  async otrSaatIni(){
    await this.wait(500);
    this.tahun_kendaraan = this.storageService.getData().tahun_kendaraan
    return this.dataService.getOtrSaatIni(this.tahun = +this.tahun_kendaraan, this.otr = this.storageService.getData().otr)
    .subscribe((res:any)=>{
      this.hitungOtr=res
      console.log(this.hitungOtr);
      this.storageService.saveOTR(this.hitungOtr);
  })
  }

  wait(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }
  
}
