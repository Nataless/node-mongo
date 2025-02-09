import { Book } from '../book.interface';

export class CreateBookDto implements Book {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  fileBook: string;
}
