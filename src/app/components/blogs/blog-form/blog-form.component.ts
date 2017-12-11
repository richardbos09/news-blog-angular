import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Moment from 'moment';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Author } from '../../../models/author.model';
import { AuthorServiceBase } from '../../../services/author.service.base';
import { Subscription } from 'rxjs/Subscription';
import { BlogServiceBase } from '../../../services/blog.service.base';
import { Blog } from '../../../models/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html'
})
export class BlogFormComponent implements OnInit, OnDestroy {
  public title: string;
  public month: string;
  public day: string;
  public year: string;
  public name: string;
  public summary: string;
  public text: string;
  public timestamp: Date;
  public form: FormGroup;
  public authors: Author[];
  private subscription: Subscription;
  
  constructor(private serviceAuthor: AuthorServiceBase,
              private serviceBlog: BlogServiceBase,
              private router: Router) { }

  ngOnInit() {
    this.month = Moment(new Date()).format("MMMM");
    this.day = Moment(new Date()).format("D");
    this.year = Moment(new Date()).format("YYYY");
    this.timestamp = new Date();
    this.subscription = this.serviceAuthor.getObserveAuthors().subscribe(
      (authors: Author[]) => {
        this.authors = authors;
      }
    );

    this.setFormValidation();
  }

  public setFormValidation(): void {
    this.form = new FormGroup({
      'title': new FormControl(this.title, Validators.required),
      'name': new FormControl(this.name, Validators.required),
      'summary': new FormControl(this.summary, Validators.required),
      'text': new FormControl(this.text, Validators.required),
      'timestamp': new FormControl(this.timestamp),
    });
  }

  public submitForm(): void {
    this.serviceBlog.postBlog(this.form.value).then(
      (blog: Blog) => {
        this.router.navigate(['/blogs/' + blog.id]);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
