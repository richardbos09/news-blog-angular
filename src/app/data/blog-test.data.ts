import { Blog } from "../models/blog.model";
import { AuthorTestData } from "./author-test.data";

export class BlogTestData {
    private _data: AuthorTestData;
    private _blogs: Array<Blog> = [
        new Blog('1', 'Blog Post 1', 12, 5, 2017, this.data.authors[0], 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
        new Blog('2', 'Blog Post 2', 1, 10, 2018, this.data.authors[1], 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'),
        new Blog('3', 'Blog Post 3', 2, 15, 2018, this.data.authors[2], 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.')
    ];

    public get data(): AuthorTestData {
        return this._data;
    }

	public blogs(month: number, year: number): Array<Blog>  {
        return this._blogs.filter(b => b.month === month && b.year === year);
	}

}