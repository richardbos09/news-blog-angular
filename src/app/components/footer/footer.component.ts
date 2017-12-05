import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private year: number = 2017;
  private company: string = 'The News Blog';
  
  constructor() { }

  ngOnInit() {
  }

}
