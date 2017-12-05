import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  private title: string = "The Bootstrap Blog";
  private description: string = "The official example template of creating a blog with Bootstrap.";
  
  constructor(private serviceBlog: BlogService) { }

  ngOnInit() {
    
  }

}
