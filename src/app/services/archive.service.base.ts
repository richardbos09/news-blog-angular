import { IArchiveService } from "./i.archive.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Archive } from "../models/archive.model";

export abstract class ArchiveServiceBase implements IArchiveService {
    getObserveArchives(): BehaviorSubject<Archive[]> {
        throw new Error("Method not implemented.");
    }
    getArchives(): Promise<Archive[]> {
        throw new Error("Method not implemented.");
    }
    getArchive(id: string): Promise<Archive> {
        throw new Error("Method not implemented.");
    }

}