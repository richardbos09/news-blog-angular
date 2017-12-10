import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Archive } from "../models/archive.model";

export interface IArchiveService {
	getObserveArchives(): BehaviorSubject<Archive[]>;
  getArchives(): Promise<Archive[]>;
  getArchive(id: string): Promise<Archive>;
}
