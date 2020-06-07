import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
  openNav() {
    console.log("here")
    document.getElementById("mySidenav").style.width = "250px";
  }

}
