import { Archive } from '../models/archive.model';
import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';

@Injectable()
export class ArchiveService {
  private _archives: Array<Archive> = [
    new Archive('1', 12, 2017,
      this.serviceBlog.blogsMonthAndYear(12, 2017)),
    new Archive('1', 1, 2018,
      this.serviceBlog.blogsMonthAndYear(1, 2018)),
    new Archive('1', 2, 2018,
      this.serviceBlog.blogsMonthAndYear(2, 2018))
  ];

  constructor(private serviceBlog: BlogService) {

  }

  public get archives(): Array<Archive> {
    return this._archives;
  }
}
