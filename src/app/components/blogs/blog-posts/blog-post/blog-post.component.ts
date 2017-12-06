import { Blog } from '../../../../models/blog.model';
import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
  @Input() private blog: Blog;
  public title: string;
  public month: string;
  public day: string;
  public year: string;
  public name: string;
  public summary: string;
  public id: string;

  constructor() { }

  ngOnInit() {
    this.title = this.blog.title;
    this.month = Moment(this.blog.timestamp).format("MMMM");
    this.day = Moment(this.blog.timestamp).format("D");
    this.year = Moment(this.blog.timestamp).format("YYYY");
    this.name = this.blog.author.name;
    this.summary = this.blog.summary;
    this.id = this.blog.id;
  }

}
