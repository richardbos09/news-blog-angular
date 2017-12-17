import { Injectable } from '@angular/core';
import { BlogServiceBase } from '../blog.service.base';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Blog } from '../../models/blog.model';
import { AuthorServiceBase } from '../author.service.base';

@Injectable()
export class NGDBBlogService extends BlogServiceBase {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = environment.neo4jUrl + '/blogs';
  private _blogs: Blog[] = [];
  private _observeBlogs: BehaviorSubject<Blog[]> =
		new BehaviorSubject<Blog[]>(this._blogs);

  constructor(private serviceAuthor: AuthorServiceBase,
              private http: Http) {
    super();
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
					new Date(b._timestamp), b._summary, b._text);
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
			const blog = new Blog(b._id, b._title, b._author, new Date(b._timestamp), 
				b._summary, b._text);
			console.log('GET: ' + this.url + "/" + id);
			console.log(blog);
			return blog;
		}).catch((error) => {
			return this.handleError(error);
		});
	}

	public addBlog(form: any): Promise<Blog> {
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

	public updateBlog(form: any, id: string): Promise<Blog> {
		const author = this.serviceAuthor.getAuthorName(form.name);
		const blog = new Blog(id, form.title, author, 
			form.timestamp, form.summary, form.text);
		return this.http.put(this.url + "/" + id, {
			headers: this.headers,
			data: blog
		}).toPromise().then((response) => {
			const b = response.json();
			const blog = new Blog(b._id, b._title, b._author, 
				b._timestamp, b._summary, b._text);
			console.log('PUT: ' + this.url + "/" + id);
			console.log(blog);
			return blog;
		}).catch((error) => {
			return this.handleError(error);
		});
	}

	public deleteBlog(id: string): Promise<Blog> {
		return this.http.delete(this.url + "/" + id, {
			headers: this.headers
		}).toPromise().then((response) => {
			const b = response.json();
			const blog = new Blog(b._id, b._title, b._author,
				b._timestamp, b._summary, b._text);
			console.log('DELETE: ' + this.url + "/" + id);
			console.log(blog);
			return blog;
		}).catch((error) => {
			return this.handleError(error);
		})
	}

	private handleError(error: any): Promise<any> {
		console.log('handleError');
		return Promise.reject(error.message || error);
	}
}
