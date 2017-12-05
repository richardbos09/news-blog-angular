import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  private title: string = "The News Blog";
  private description: string = "The official blog website created with Bootstrap";

  constructor() { }

  ngOnInit() {

  }
}
