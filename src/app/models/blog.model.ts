import { Author } from "./author.model";

export class Blog {
	private _id: string;
	private _title: string;
	private _author: Author;
	private _timestamp: Date;
	private _text: string;

	constructor(id: string, title: string, author: Author, 
				timestamp: Date, text: string) {
		this._id = id;
		this._title = title;
		this._author = author;
		this._timestamp = timestamp;
		this._text = text;
	}

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get title(): string {
		return this._title;
	}

	public set title(value: string) {
		this._title = value;
	}

	public get author(): Author {
		return this._author;
	}

	public set author(value: Author) {
		this._author = value;
	}

	public get text(): string {
		return this._text;
	}

	public set text(value: string) {
		this._text = value;
	}

	public get timestamp(): Date {
		return this._timestamp;
	}

	public set timestamp(value: Date) {
		this._timestamp = value;
	}
	
}