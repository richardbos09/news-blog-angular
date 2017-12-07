import { Injectable } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthorServiceBase } from '../author.service.base';
import * as Moment from 'moment';
import { BlogServiceBase } from '../blog.service.base';

@Injectable()
export class MDBBlogService extends BlogServiceBase {
  private _blogs: Array<Blog> = [
		new Blog('1', 'Blog Post 1', this.serviceAuthor.getAuthors()[0],
			new Date(1512464400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
		new Blog('2', 'Blog Post 2', this.serviceAuthor.getAuthors()[1],
			new Date(1515578400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
		new Blog('3', 'Blog Post 3', this.serviceAuthor.getAuthors()[2],
			new Date(1518692400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
		new Blog('4', 'Blog Post 4', this.serviceAuthor.getAuthors()[2],
			new Date(1513771200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
		new Blog('5', 'Blog Post 5', this.serviceAuthor.getAuthors()[1],
			new Date(1516885200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
		new Blog('6', 'Blog Post 6', this.serviceAuthor.getAuthors()[0],
			new Date(1519135200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.')
	];
	private _observeBlogs: BehaviorSubject<Array<Blog>> =
		new BehaviorSubject<Array<Blog>>(this._blogs);

	constructor(private serviceAuthor: AuthorServiceBase) {
    super();
  }

	public getObserveBlogs(): BehaviorSubject<Array<Blog>> {
		return this._observeBlogs;
	}

	public getBlogs(): Array<Blog> {
		return this._blogs;
	}

	public getBlogsYearAndMonth(year: number, month: number): Array<Blog> {
		return this._blogs.filter(
			b => Moment(b.timestamp).format("YYYY") === 
			year.toString() && Moment(b.timestamp).format("M") ===
			month.toString()
		);
	}

	public getBlog(id: string): Blog {
		return this._blogs.find(b => b.id === id);
	}
}
