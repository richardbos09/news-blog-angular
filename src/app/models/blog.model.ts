import { Author } from "./author.model";

export class Blog {
    private _id: string;
    private _title: string;
    private _month: number;
    private _day: number;
    private _year: number;
    private _author: Author;
    private _text: string;

	constructor(id: string, title: string, month: number, day: number, year: number, author: Author, text: string) {
		this._id = id;
		this._title = title;
		this._month = month;
		this._day = day;
		this._year = year;
		this._author = author;
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

	public get month(): number {
		return this._month;
	}

	public set month(value: number) {
		this._month = value;
	}

	public get day(): number {
		return this._day;
	}

	public set day(value: number) {
		this._day = value;
	}

	public get year(): number {
		return this._year;
	}

	public set year(value: number) {
		this._year = value;
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
    
}