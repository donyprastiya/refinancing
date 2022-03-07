import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close_window() {
    window.open('', '_self', '')
    window.close();
  }
  

}
