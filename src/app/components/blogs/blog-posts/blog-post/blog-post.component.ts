import { Blog } from '../../../../models/blog.model';
import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() private blog: Blog;
  private title: string;
  private month: string;
  private day: string;
  private year: string;
  private name: string;
  private text: string;

  constructor() { }

  ngOnInit() {
    this.title = this.blog.title;
    this.month = Moment(this.blog.timestamp).format("MMMM");
    this.day = Moment(this.blog.timestamp).format("D");
    this.year = Moment(this.blog.timestamp).format("YYYY");
    this.name = this.blog.author.name;
    this.text = this.blog.text;
  }

}
