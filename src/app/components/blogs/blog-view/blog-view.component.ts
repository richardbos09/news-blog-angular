import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../models/blog.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import * as Moment from 'moment';
import { BlogServiceBase } from '../../../services/blog.service.base';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html'
})
export class BlogViewComponent implements OnInit, OnDestroy {
  private blog: Blog;
  private subscription: Subscription;

  public title: string;
  public month: string;
  public day: string;
  public year: string;
  public name: string;
  public summary: string;
  public text: string;

  constructor(private serviceBlog: BlogServiceBase,
              private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.aRoute.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.blog = this.serviceBlog.getBlog(id);

        this.title = this.blog.title;
        this.month = Moment(this.blog.timestamp).format("MMMM");
        this.day = Moment(this.blog.timestamp).format("D");
        this.year = Moment(this.blog.timestamp).format("YYYY");
        this.name = this.blog.author.name;
        this.summary = this.blog.summary;
        this.text = this.blog.text;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
