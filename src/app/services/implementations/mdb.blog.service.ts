import { Injectable } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthorServiceBase } from '../author.service.base';
import * as Moment from 'moment';
import { BlogServiceBase } from '../blog.service.base';
import { environment } from '../../../environments/environment';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Author } from '../../models/author.model';
import { ArchiveServiceBase } from '../archive.service.base';

@Injectable()
export class MDBBlogService extends BlogServiceBase {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private url = environment.serverUrl + '/blogs';
	private _blogs: Blog[] = [];
	// private _blogs: Array<Blog> = [
	// 	new Blog('1', 'Blog Post 1', this.serviceAuthor.getAuthor('1'),
	// 		new Date(1512464400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
	// 	new Blog('2', 'Blog Post 2', this.serviceAuthor.getAuthor('2'),
	// 		new Date(1515578400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
	// 	new Blog('3', 'Blog Post 3', this.serviceAuthor.getAuthor('3'),
	// 		new Date(1518692400000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
	// 	new Blog('4', 'Blog Post 4', this.serviceAuthor.getAuthor('3'),
	// 		new Date(1513771200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
	// 	new Blog('5', 'Blog Post 5', this.serviceAuthor.getAuthor('2'),
	// 		new Date(1516885200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'),
	// 	new Blog('6', 'Blog Post 6', this.serviceAuthor.getAuthor('1'),
	// 		new Date(1519135200000), 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	// 		'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.')
	// ];
	private _observeBlogs: BehaviorSubject<Blog[]> =
		new BehaviorSubject<Blog[]>(this._blogs);

	constructor(private serviceAuthor: AuthorServiceBase,
				private http: Http) {
		super();
		//this.getBlogs();
	}

	public getObserveBlogs(): BehaviorSubject<Blog[]> {
		return this._observeBlogs;
	}

	public getBlogs(): Promise<Blog[]> {
		return this.http.get(this.url, { 
			headers: this.headers 
		}).toPromise().then((response) => {
			const blogs = response.json();
			this._blogs = [];
			blogs.forEach((b) => {
				const blog = new Blog(b._id, b._title, b._author, 
					b._timestamp, b._summary, b._text);
				this._blogs.push(blog);
			});
			console.log('GET: ' + this.url);
			console.log(this._blogs);
			return this._observeBlogs.next(this._blogs);
		}).catch((error) => {
			return this.handleError(error);
		});
	}

	public getBlogsYearAndMonth(year: number, month: number): Blog[] {
		return this._blogs.filter(b => 
			new Date(b.timestamp).getFullYear() === year && 
			new Date(b.timestamp).getMonth() === month
		);
	}

	public getBlog(id: string): Promise<Blog> {
		return this.http.get(this.url + "/" + id, {
			headers: this.headers
		}).toPromise().then((response) => {
			const b = response.json();
			const blog = new Blog(b._id, b._title, b._author, b._timestamp, 
				b._summary, b._text);
			console.log('GET ' + this.url + "/" + id);
			console.log(blog);
			return blog;
		}).catch((error) => {
			return this.handleError(error);
		});
	}

	public postBlog(form: any): Promise<Blog> {
		const author = this.serviceAuthor.getAuthorName(form.name);
		const blog = new Blog(null, form.title, author, 
			form.timestamp, form.summary, form.text);
		return this.http.post(this.url, {
			headers: this.headers,
			data: blog
		}).toPromise().then((response) => {
			const b = response.json();
			const blog = new Blog(b._id, b._title, b._author, 
				b._timestamp, b._summary, b._text);
			console.log('POST: ' + this.url);
			console.log(blog);
			return blog;
		}).catch((error) => {
			return this.handleError(error);
		});
	}

	private handleError(error: any): Promise<any> {
		console.log('handleError');
		return Promise.reject(error.message || error);
	}
}
