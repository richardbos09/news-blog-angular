import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Moment from 'moment';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Author } from '../../../models/author.model';
import { AuthorServiceBase } from '../../../services/author.service.base';
import { Subscription } from 'rxjs/Subscription';
import { BlogServiceBase } from '../../../services/blog.service.base';
import { Blog } from '../../../models/blog.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html'
})
export class BlogFormComponent implements OnInit, OnDestroy {
  private id: string;
  public title: string;
  public month: string;
  public day: string;
  public year: string;
  public name: string;
  public summary: string;
  public text: string;
  public preview: boolean;
  public timestamp: Date;
  public form: FormGroup;
  public authors: Author[];
  private update: boolean;
  private subs: Array<Subscription> = [
    new Subscription(),
    new Subscription(),
  ];
  
  constructor(private serviceAuthor: AuthorServiceBase,
              private serviceBlog: BlogServiceBase,
              private aRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.preview = true;
    this.timestamp = new Date();

    this.serviceAuthor.getAuthors();
    this.subs[0] = this.serviceAuthor.getObserveAuthors().subscribe(
      (authors: Author[]) => {
        this.authors = authors;
      }
    );

    this.subs[1] = this.aRoute.params.subscribe(
      (params: Params) => {
        if(params['id']) {
          this.update = true;
          this.id = params['id'];
          const blog = this.serviceBlog.getBlog(this.id).then(
            (blog: Blog) => {
              this.title = blog.title;
              const author = this.serviceAuthor.getAuthor(blog.author.toString()).then(
                (author: Author) => {
                  this.name = author.name;
                } 
              );
              this.summary = blog.summary;
              this.text = blog.text;
            }
          );
        }
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
    if(!this.update) {
      this.serviceBlog.addBlog(this.form.value).then(
        (blog: Blog) => {
          this.router.navigate(['/blogs/' + blog.id]);
        }
      );
    } else {
      this.serviceBlog.updateBlog(this.form.value, this.id).then(
        (blog: Blog) => {
          this.router.navigate(['/blogs/' + blog.id]);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subs[0].unsubscribe();
    this.subs[1].unsubscribe();
  }
}
