import { Component, OnInit } from '@angular/core';
import { Archive } from '../../../models/archive.model';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ArchiveServiceBase } from '../../../services/archive.service.base';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html'
})
export class ArchiveListComponent implements OnInit, OnDestroy {
  public archives: Array<Archive>;
  private subscription: Subscription;

  constructor(private serviceArchive: ArchiveServiceBase) { }

  ngOnInit() {
    this.subscription = this.serviceArchive.getObserveArchives().
      subscribe(
        (archives: Array<Archive>) => {
          this.archives = archives.sort(
            (a, b) => {
              if(a.datestamp.getTime() < b.datestamp.getTime()) {
                return 1;
              }
            }
          );
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
