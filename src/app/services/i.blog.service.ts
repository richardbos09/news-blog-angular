import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Blog } from "../models/blog.model";

export interface IBlogService {
	getObserveBlogs(): BehaviorSubject<Blog[]>;
	getBlogs(): Promise<Blog[]>;
	getBlogsYearAndMonth(year: number, month: number): Blog[];
	getBlog(id: string): Promise<Blog>;
	addBlog(form: any): Promise<Blog>;
	updateBlog(form: any, id: string): Promise<Blog>;
	deleteBlog(id: string): Promise<Blog>;
}
