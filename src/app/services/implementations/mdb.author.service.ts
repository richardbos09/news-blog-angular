import { Injectable } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorServiceBase } from '../author.service.base';

@Injectable()
export class MDBAuthorService extends AuthorServiceBase {
  private _authors: Array<Author> = [
    new Author('1', 'Richard'),
    new Author('2', 'Danny'),
    new Author('3', 'Hugo')
  ];

  constructor() {
    super();
  }

  public getAuthors(): Array<Author> {
    return this._authors;
  }

  public getAuthor(id: string): Author {
    return this._authors.find(a => a.id === id);
  }
}
