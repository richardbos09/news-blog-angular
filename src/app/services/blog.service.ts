import { Blog } from '../models/blog.model';
import { Injectable } from '@angular/core';
import { AuthorService } from './author.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as Moment from 'moment';

@Injectable()
export class BlogService {
	private _blogs: Array<Blog> = [
		new Blog('1', 'Blog Post 1', this.serviceAuthor.authors[0],
			new Date(1512464400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('2', 'Blog Post 2', this.serviceAuthor.authors[1],
			new Date(1515578400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('3', 'Blog Post 3', this.serviceAuthor.authors[2],
			new Date(1518692400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('4', 'Blog Post 4', this.serviceAuthor.authors[2],
			new Date(1513771200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('5', 'Blog Post 5', this.serviceAuthor.authors[1],
			new Date(1516885200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
		new Blog('6', 'Blog Post 6', this.serviceAuthor.authors[0],
			new Date(1519135200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.')
	];
	private _observeBlogs: BehaviorSubject<Array<Blog>> =
		new BehaviorSubject<Array<Blog>>(this.blogs);

	constructor(private serviceAuthor: AuthorService) { }

	public get observeBlogs(): BehaviorSubject<Array<Blog>> {
		return this._observeBlogs;
	}

	public get blogs(): Array<Blog> {
		return this._blogs;
	}

	public blogsMonthAndYear(month: number, year: number): Array<Blog> {
		return this._blogs.filter(
			b => Moment(b.timestamp).format("M") ===
				month.toString() &&
				Moment(b.timestamp).format("YYYY") === 
				year.toString()
		);
	}
}
