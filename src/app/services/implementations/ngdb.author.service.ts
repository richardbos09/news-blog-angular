import { Injectable } from '@angular/core';
import { AuthorServiceBase } from '../author.service.base';
import { Author } from '../../models/author.model';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class NGDBAuthorService extends AuthorServiceBase{
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = environment.neo4jUrl + '/authors';
  private _authors: Author[];
  private _observeAuthors: BehaviorSubject<Author[]> =
    new BehaviorSubject<Author[]>(this._authors);

  constructor(private http: Http) {
    super();
    this.getAuthors();
  }

  getObserveAuthors(): BehaviorSubject<Author[]> {
    return this._observeAuthors;
  }
  
  public getAuthors(): Promise<Author[]> {
    throw new Error("Method not implemented.");
  }

  public getAuthor(id: string): Promise<Author> {
    throw new Error("Method not implemented.");
  }

  public getAuthorName(name: string): Author {
    throw new Error("Method not implemented.");
  }
}
