import { IBlogService } from "./i.blog.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Blog } from "../models/blog.model";

export abstract class BlogServiceBase implements IBlogService{
    getObserveBlogs(): BehaviorSubject<Blog[]> {
        throw new Error("Method not implemented.");
    }
    getBlogs(): Blog[] {
        throw new Error("Method not implemented.");
    }
    getBlogsYearAndMonth(year: number, month: number): Blog[] {
        throw new Error("Method not implemented.");
    }
    getBlog(id: string): Blog {
        throw new Error("Method not implemented.");
    }

}