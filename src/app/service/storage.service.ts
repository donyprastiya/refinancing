import { Injectable } from '@angular/core';

const DATA = 'data-key';
const OTR = 'otr-key';
const SIMULASI = 'simulasi-key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveData(csf: any): void {
    window.sessionStorage.clear
    window.sessionStorage.removeItem(DATA);
    window.sessionStorage.setItem(DATA, JSON.stringify(csf));
  }

  public getData(): any {
    const data = window.sessionStorage.getItem(DATA);
    if (data) {
      return JSON.parse(data);
    }

    return {};
  }

  public saveOTR(otr: number): void {
    window.sessionStorage.clear
    window.sessionStorage.removeItem(OTR);
    window.sessionStorage.setItem(OTR, JSON.stringify(otr));
  }

  public getOTR(): any {
    const otr = window.sessionStorage.getItem(OTR);
    if (otr) {
      return JSON.parse(otr);
    }

    return {};
  }

  public saveSimulasi(simulasi: any): void {
    window.sessionStorage.clear
    window.sessionStorage.removeItem(SIMULASI);
    window.sessionStorage.setItem(SIMULASI, JSON.stringify(simulasi));
  }

  public getSimulasi(): any {
    const simulasi = window.sessionStorage.getItem(SIMULASI);
    if (simulasi) {
      return JSON.parse(simulasi);
    }

    return {};
  }
}
