import { Injectable } from '@angular/core';
import { Archive } from '../../models/archive.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BlogServiceBase } from '../blog.service.base';
import { ArchiveServiceBase } from '../archive.service.base';
import { environment } from '../../../environments/environment';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class MDBArchiveService extends ArchiveServiceBase {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = environment.serverUrl + '/archives';
  private _archives: Archive[] = []
  // private _archives: Array<Archive> = [
  //   new Archive('1', new Date(2017, 11),
  //     this.serviceBlog.getBlogsYearAndMonth(2017, 12,)),
  //   new Archive('2', new Date(2018, 0),
  //     this.serviceBlog.getBlogsYearAndMonth(2018, 1)),
  //   new Archive('3', new Date(2018, 1),
  //     this.serviceBlog.getBlogsYearAndMonth(2018, 2))
  // ];
  private _observeArchives: BehaviorSubject<Archive[]> = 
    new BehaviorSubject<Archive[]>(this._archives);

  constructor(private serviceBlog: BlogServiceBase,
              private http: Http) {
    super();
    //this.getArchives();
  }

	public getObserveArchives(): BehaviorSubject<Archive[]>  {
		return this._observeArchives;
	}

  public getArchives(): Promise<Archive[]> {
    return this.http.get(this.url, {
      headers: this.headers
    }).toPromise().then((response) => {
      const archives = response.json();
      this._archives = [];
      archives.forEach((a) => {
        const archive = new Archive(a._id, a._datestamp, a._blogs);
        this._archives.push(archive);
      });
      console.log('GET: ' + this.url);
      console.log(this._archives);
      return this._observeArchives.next(this._archives);
    }).catch((error) => {
      return this.handleError(error);
    });
  }

  public getArchive(id: string): Promise<Archive> {
    return this.http.get(this.url + "/" + id, {
      headers: this.headers
    }).toPromise().then((response) => {
      const a = response.json();
      const archive = new Archive(a._id, a._datestamp, a._blogs);
      console.log('GET: ' + this.url + "/" + id);
      console.log(archive);
      return archive;
    }).catch((error) => {
      return this.handleError(error);
    });
  }

  private handleError(error: any): Promise<any> {
		console.log('handleError');
		return Promise.reject(error.message || error);
	}
}
