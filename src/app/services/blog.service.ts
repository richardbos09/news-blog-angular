import { Blog } from '../models/blog.model';
import { Injectable } from '@angular/core';
import { AuthorService } from './author.service';

@Injectable()
export class BlogService {
	private _blogs: Array<Blog> = [
		new Blog('1', 'Blog Post 1', 12, 5, 2017, this.serviceAuthor.authors[0], 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('2', 'Blog Post 2', 1, 10, 2018, this.serviceAuthor.authors[1], 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('3', 'Blog Post 3', 2, 15, 2018, this.serviceAuthor.authors[2], 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.')
	];
	
	constructor(private serviceAuthor: AuthorService) {
		
	}

	public get blogs(): Array<Blog> {
		return this._blogs;
	}

	public blogsMonthAndYear(month: number, year: number): Array<Blog>  {
		return this._blogs.filter(b => b.month === month && b.year === year);
	}
}
