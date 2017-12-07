import { IAuthorService } from "./i.author.service";
import { Author } from "../models/author.model";

export abstract class AuthorServiceBase implements IAuthorService {
    getAuthors(): Author[] {
        throw new Error("Method not implemented.");
    }
    
}