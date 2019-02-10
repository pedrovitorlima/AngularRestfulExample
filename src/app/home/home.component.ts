import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style : boolean = false;
  divStyle : boolean = false;

  //need this to call restful services
  users: Object;
  
  constructor(private data : DataService) { }

  ngOnInit() {
    //calling fake restful service to get faking users
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }

  firstClick() {
    this.data.firstClick();
    this.h1Style = !this.h1Style;
    this.divStyle = !this.divStyle;
  }

}
