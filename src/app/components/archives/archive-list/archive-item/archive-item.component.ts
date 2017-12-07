import { Component, OnInit, Input } from '@angular/core';
import { Archive } from '../../../../models/archive.model';
import * as Moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html'
})
export class ArchiveItemComponent implements OnInit {
  @Input() private archive: Archive;
  public month: string;
  public year: string;
  public id: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.month = Moment(this.archive.datestamp).format("MMMM");
    this.year = Moment(this.archive.datestamp).format("YYYY");
    this.id = this.archive.id;
  }

  public onBlogPosts(id): void {
    this.router.navigate(['/archives/' + id]);
  }
}
