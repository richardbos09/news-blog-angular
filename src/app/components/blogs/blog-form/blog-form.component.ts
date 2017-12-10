import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html'
})
export class BlogFormComponent implements OnInit {
  public title: string;
  public month: string;
  public day: string;
  public year: string;
  public name: string;
  public summary: string;
  public text: string;
  public form: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.month = Moment(new Date()).format("MMMM");
    this.day = Moment(new Date()).format("D");
    this.year = Moment(new Date()).format("YYYY");

    this.setFormValidation();
  }

  public setFormValidation(): void {
    this.form = new FormGroup({
      'title': new FormControl(this.title, Validators.required),
      'name': new FormControl(this.name, Validators.required),
      'summary': new FormControl(this.summary, Validators.required),
      'text': new FormControl(this.text, Validators.required)
    });
  }

}
