import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-detailhitungan',
  templateUrl: './detailhitungan.component.html',
  styleUrls: ['./detailhitungan.component.css']
})
export class DetailhitunganComponent implements OnInit {

  data:any

  constructor(private dataService : DataService, private actRoute : ActivatedRoute, private storageService : StorageService, private router: Router) { }

  ngOnInit(): void {
    this.dataBooking()
  }

  dataBooking(){
    return this.dataService.getAllDataBooking()
    .subscribe((res:any)=>{
        this.data=res
        console.log(this.data)
    })
  }

}
