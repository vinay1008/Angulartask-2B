import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit{
  contactForm : any;
  
  options = "Choose option";
  ngOnInit(): void {

  }
}
