import { Blog } from '../../../models/blog.model';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { BlogServiceBase } from '../../../services/blog.service.base';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html'
})
export class BlogPostsComponent implements OnInit, OnDestroy {
  public title: string = "The News Blog";
  public description: string = "The official blog website created with Bootstrap";
  public blogs: Array<Blog>;
  private subscription: Subscription;

  constructor(private serviceBlog: BlogServiceBase) { }

  ngOnInit() {
    this.subscription = this.serviceBlog.getObserveBlogs().subscribe(
      (blogs: Array<Blog>) => {
        this.blogs = blogs.sort(
          (a, b) => {
            if(a.timestamp.getTime() < b.timestamp.getTime()) {
              return 1;
            }
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
