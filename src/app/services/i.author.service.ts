import { Author } from '../models/author.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface IAuthorService {
  getObserveAuthors(): BehaviorSubject<Author[]>;
  getAuthors(): Promise<Author[]>;
  getAuthor(id: string): Promise<Author>;
}
