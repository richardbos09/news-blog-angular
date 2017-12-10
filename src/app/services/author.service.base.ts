import { IAuthorService } from "./i.author.service";
import { Author } from "../models/author.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export abstract class AuthorServiceBase implements IAuthorService {
    getObserveAuthors(): BehaviorSubject<Author[]> {
        throw new Error("Method not implemented.");
    }
    getAuthors(): Promise<Author[]> {
        throw new Error("Method not implemented.");
    }
    getAuthor(id: string): Promise<Author> {
        throw new Error("Method not implemented.");
    }
    
}