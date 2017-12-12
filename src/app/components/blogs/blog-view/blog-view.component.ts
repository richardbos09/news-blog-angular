import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../../models/blog.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import * as Moment from 'moment';
import { BlogServiceBase } from '../../../services/blog.service.base';
import { AuthorServiceBase } from '../../../services/author.service.base';
import { Author } from '../../../models/author.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html'
})
export class BlogViewComponent implements OnInit, OnDestroy {
  public id: string;
  private blog: Blog;
  private subscription: Subscription;

  @Input() public title: string;
  @Input() public month: string;
  @Input() public day: string;
  @Input() public year: string;
  @Input() public name: string;
  @Input() public summary: string;
  @Input() public text: string;
  @Input() public preview: boolean;

  constructor(private serviceBlog: BlogServiceBase,
              private serviceAuthor: AuthorServiceBase,
              private aRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.title = "Title";
    this.month = Moment(new Date()).format("MMMM");
    this.day = Moment(new Date()).format("D");
    this.year = Moment(new Date()).format("YYYY");
    this.name = "Author";

    this.subscription = this.aRoute.params.subscribe(
      (params: Params) => {
        if(params['id']) {
          this.id = params['id'];
          this.serviceBlog.getBlog(this.id).then(
            (blog: Blog) => {
              this.blog = blog
              this.title = this.blog.title;
              this.month = Moment(this.blog.timestamp).format("MMMM");
              this.day = Moment(this.blog.timestamp).format("D");
              this.year = Moment(this.blog.timestamp).format("YYYY");
              this.serviceAuthor.getAuthor(this.blog.author.toString()).then(
                (author: Author) => {
                  this.name = author.name;
                }
              );
              this.summary = this.blog.summary;
              this.text = this.blog.text;
            }
          );
        }
      }
    );
  }

  public updateBlog(id: string): void {
    this.router.navigate(['/blogs/form/' + id]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
