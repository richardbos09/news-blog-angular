import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Archive } from "../models/archive.model";

export interface IArchiveService {
	getObserveArchives(): BehaviorSubject<Array<Archive>>;
  getArchives(): Array<Archive>;
  getArchive(id: string): Archive;
}
