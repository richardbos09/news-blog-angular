import { Author } from '../models/author.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    private _authors: Array<Author> = [
      new Author('1', 'Richard'),
      new Author('2', 'Danny'),
      new Author('3', 'Hugo')
    ];

    constructor() { }

    public get authors(): Array<Author> {
      return this._authors;
    }

}
