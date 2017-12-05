import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog.model';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit, OnDestroy {
  private blogs: Array<Blog>;
  private subscription: Subscription;

  constructor(private serviceBlog: BlogService) { }

  ngOnInit() {
    this.subscription = this.serviceBlog.observeBlogs.subscribe(
      (blogs: Array<Blog>) => {
        this.blogs = blogs.sort((a, b) => {
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
