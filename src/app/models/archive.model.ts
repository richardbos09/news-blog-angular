import {Blog} from './blog.model';

export class Archive {
    protected _id: string;
    private _datestamp: Date;
    private _blogs: Array<Blog>;

    constructor(id: string, datestamp: Date, 
                blogs: Array<Blog>) {
		this._id = id;
		this._datestamp = datestamp;
        this._blogs = blogs;
    }
    
    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

	public get datestamp(): Date {
		return this._datestamp;
	}

	public set datestamp(value: Date) {
		this._datestamp = value;
	}
    
    public get blogs(): Array<Blog> {
        return this._blogs;
    }

    public set blogs(value: Array<Blog>) {
        this._blogs = value;
    }
}