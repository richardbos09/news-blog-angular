import {Blog} from './blog.model';

export class Archive {
    private _id: string;
    private _month: number;
    private _year: number;
    private _blogs: Array<Blog>;

    constructor(id: string, month: number, year: number, 
                blogs: Array<Blog>) {
		this._id = id;
		this._month = month;
		this._year = year;
		this._blogs = blogs;
    }
    
    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get month(): number {
        return this._month;
    }

    public set month(value: number) {
        this._month = value;
    }

    public get year(): number {
        return this._year;
    }

    public set year(value: number) {
        this._year = value;
    }

    public get blogs(): Array<Blog> {
        return this._blogs;
    }

    public set blogs(value: Array<Blog>) {
        this._blogs = value;
    }
}