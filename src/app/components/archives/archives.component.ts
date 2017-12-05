import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  constructor(private serviceArchive: ArchiveService) { }

  ngOnInit() {
  }

}
