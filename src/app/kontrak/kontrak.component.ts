import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-kontrak',
  templateUrl: './kontrak.component.html',
  styleUrls: ['./kontrak.component.css']
})
export class KontrakComponent implements OnInit {

  kontrak : any
  data:any

  constructor(private dataService : DataService, private actRoute : ActivatedRoute, private storageService : StorageService) { }

  ngOnInit(): void {
    this.showListKontrak();
  }

  showListKontrak(){
    return this.dataService.showListKontrak("dpn330@gmail.com")
      .subscribe((res:any)=>{
        this.kontrak = res
      })
  }

  toStorage(no_kontrak:string){
    return this.dataService.showKontrak(no_kontrak)
    .subscribe((res:any)=>{
        this.data=res
        this.storageService.saveData(res)
        console.log(this.data)
    })
  }
}
