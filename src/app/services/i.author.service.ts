import { Author } from '../models/author.model';

export interface IAuthorService {
  getAuthors(): Array<Author>;
  getAuthor(id: string): Author;
}
