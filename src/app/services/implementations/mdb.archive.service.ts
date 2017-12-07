import { Injectable } from '@angular/core';
import { Archive } from '../../models/archive.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BlogServiceBase } from '../blog.service.base';
import { ArchiveServiceBase } from '../archive.service.base';

@Injectable()
export class MDBArchiveService extends ArchiveServiceBase {
  private _archives: Array<Archive> = [
    new Archive('1', new Date(2017, 11),
      this.serviceBlog.getBlogsYearAndMonth(2017, 12,)),
    new Archive('2', new Date(2018, 0),
      this.serviceBlog.getBlogsYearAndMonth(2018, 1)),
    new Archive('3', new Date(2018, 1),
      this.serviceBlog.getBlogsYearAndMonth(2018, 2))
  ];
  private _observeArchives: BehaviorSubject<Array<Archive>> = 
    new BehaviorSubject<Array<Archive>>(this._archives);

  constructor(private serviceBlog: BlogServiceBase) {
    super();
  }

	public getObserveArchives(): BehaviorSubject<Array<Archive>>  {
		return this._observeArchives;
	}

  public getArchives(): Array<Archive> {
    return this._archives;
  }

  public getArchive(id: string): Archive {
    return this._archives.find(a => a.id === id);
  }
}
