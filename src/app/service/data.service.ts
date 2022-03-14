import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// const DOMAIN_API = 'http://localhost:8091/'
const DOMAIN_API = 'https://refinancing-api.herokuapp.com/'

const header    = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  showListKontrak(email:string){
    let URL_API  = DOMAIN_API+"csf/nokontrakbyemail?email="+email;
    return this.http.get(URL_API, header)
  }

  showKontrak(noKontrak:string){
    let URL_API  = DOMAIN_API+"csf/nokontrak?noKontrak="+noKontrak;
    return this.http.get(URL_API, header)
  }

  getDp(tenor:number, otr:number){
    let URL_API  = DOMAIN_API+"hit/hitungdp?tenor="+tenor+"&otr="+otr;
    return this.http.get(URL_API, header)
  }

  getsimulasi(tenor:number, otr:number, asuransi:string, sisa:number){
    let URL_API  = DOMAIN_API+"hit/hitungan?tenor="+tenor+"&otr="+otr+"&tipeAsuransi="+asuransi+"&outStanding="+sisa;
    return this.http.get(URL_API, header)
  }

  getsimulasinew(tenor:number, otr:number, asuransi:string, sisa:number, selisih:number){
    let URL_API  = DOMAIN_API+"hit/hitungan?tenor="+tenor+"&otr="+otr+"&tipeAsuransi="+asuransi+"&outStanding="+sisa+"&minSelisih="+selisih;
    return this.http.get(URL_API, header)
  }

  getOtrSaatIni(tahun:number, otr:number){
    let URL_API  = DOMAIN_API+"ref/hitung?umur="+tahun+"&harga="+otr;
    return this.http.get(URL_API, header)
  }

  getDateTime(){
    let URL_API  = DOMAIN_API+"hit/datetime";
    return this.http.get(URL_API, {responseType: 'text'})
  }

  // addBooking(konsumen_nama:string, konsumen_noHP:string, konsumen_alamat:string){
  //   let URL_API  = DOMAIN_API+"csf/savebooking";
  //   return this.http.post(URL_API, {konsumen_nama, konsumen_noHP, konsumen_alamat}, header)
  // }

  addBooking(konsumen_nokontrak:string, konsumen_nama:string, konsumen_noHP:string, konsumen_alamat:string, waktu_booking:string, otr:number, tenor:number, jenisAsuransi:string, dpPersen:number, dp:number, phAwal:number, rateAsuransi:number, asuransi:number, bungaFlat:number, bungaJual: number, tph:number, angsuran:number, provisiAdmin:number, fidusia:number, cp:number, potongan:number, totalPotongan:number, danaCair:number, danaCairMinET:number){
    let URL_API  = DOMAIN_API+"csf/savebooking";
    return this.http.post(URL_API, {konsumen_nokontrak, konsumen_nama, konsumen_noHP, konsumen_alamat, waktu_booking, otr, tenor, jenisAsuransi, dpPersen, dp, phAwal, rateAsuransi, asuransi, bungaFlat, bungaJual, tph, angsuran, provisiAdmin, fidusia, cp, potongan, totalPotongan, danaCair, danaCairMinET}, header)
  }

  getbykontrak(kontrak:string){
    let URL_API  = DOMAIN_API+"csf/getbykontrak?kontrak="+kontrak;
    return this.http.get(URL_API, header)
  }

  getbykontrak2(kontrak:string){
    let URL_API  = DOMAIN_API+"csf/getbykontrak2?kontrak="+kontrak;
    return this.http.get(URL_API, header)
  }

  setPengajuan(kontrak:string){
    let URL_API  = DOMAIN_API+"csf/setstatuspengajuan?kontrak="+kontrak;
    return this.http.get(URL_API, header)
  }

  getAllDataBooking(){
    let URL_API  = DOMAIN_API+"csf/databooking";
    return this.http.get(URL_API, header)
  }

}
