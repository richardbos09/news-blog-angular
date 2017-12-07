import { Component, OnInit, Input } from '@angular/core';
import { Archive } from '../../../../models/archive.model';
import * as Moment from 'moment';

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html'
})
export class ArchiveItemComponent implements OnInit {
  @Input() private archive: Archive;
  public month: string;
  public year: string;

  constructor() { }

  ngOnInit() {
    this.month = Moment(this.archive.datestamp).format("MMMM");
    this.year = Moment(this.archive.datestamp).format("YYYY");
  }

}
