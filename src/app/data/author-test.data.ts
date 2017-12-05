import { Author } from "../models/author.model";

export class AuthorTestData {
    private _authors: Array<Author> = [
        new Author('1', 'Richard'),
        new Author('2', 'Danny'),
        new Author('3', 'Hugo')
    ];

	public get authors(): Array<Author>  {
		return this._authors;
	}
    
}