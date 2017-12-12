import { IBlogService } from "./i.blog.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Blog } from "../models/blog.model";

export abstract class BlogServiceBase implements IBlogService{
    getObserveBlogs(): BehaviorSubject<Blog[]> {
        throw new Error("Method not implemented.");
    }
    getBlogs(): Promise<Blog[]> {
        throw new Error("Method not implemented.");
    }
    getBlogsYearAndMonth(year: number, month: number): Blog[] {
        throw new Error("Method not implemented.");
    }
    getBlog(id: string): Promise<Blog> {
        throw new Error("Method not implemented.");
    }
    addBlog(form: any): Promise<Blog> {
        throw new Error("Method not implemented.");
    }
    updateBlog(form: any, id: string): Promise<Blog> {
        throw new Error("Method not implemented.");
    }
}