import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Blog } from "../models/blog.model";

export interface IBlogService {
	getObserveBlogs(): BehaviorSubject<Array<Blog>>;
	getBlogs(): Array<Blog>;
	getBlogsYearAndMonth(year: number, month: number): Array<Blog>;
	getBlog(id: string): Blog;
}
