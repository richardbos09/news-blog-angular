import { Component, OnInit, OnDestroy } from '@angular/core';
import { Archive } from '../../../models/archive.model';
import { Subscription } from 'rxjs/Subscription';
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
    this.serviceArchive.getArchives();
    this.subscription = this.serviceArchive.getObserveArchives().
      subscribe(
        (archives: Array<Archive>) => {
          this.archives = archives.sort(
            (a, b) => {
              if(new Date(a.datestamp).getTime() < new Date(b.datestamp).getTime()) {
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
