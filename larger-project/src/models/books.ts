export interface Book {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  genre: string;
  pages: number;
  ISBN: string;
  language: string;
  publisher: string;
};

export const books: Book[] = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedDate: '1960-07-11',
    genre: 'Fiction',
    pages: 281,
    ISBN: '978-0-06-112008-4',
    language: 'English',
    publisher: 'J.B. Lippincott & Co.'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    publishedDate: '1949-06-08',
    genre: 'Dystopian, Political Fiction',
    pages: 328,
    ISBN: '978-0-452-28423-4',
    language: 'English',
    publisher: 'Secker & Warburg'
  },
  {
    id: '3',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedDate: '1925-04-10',
    genre: 'Tragedy',
    pages: 180,
    ISBN: '978-0-7432-7356-5',
    language: 'English',
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    id: '4',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publishedDate: '1951-07-16',
    genre: 'Realism, Fiction',
    pages: 214,
    ISBN: '978-0-316-76948-0',
    language: 'English',
    publisher: 'Little, Brown and Company'
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publishedDate: '1937-09-21',
    genre: 'Fantasy',
    pages: 310,
    ISBN: '978-0-618-00221-3',
    language: 'English',
    publisher: 'George Allen & Unwin'
  },
  {
    id: '6',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publishedDate: '1813-01-28',
    genre: 'Romance',
    pages: 279,
    ISBN: '978-1-59308-029-6',
    language: 'English',
    publisher: 'T. Egerton, Whitehall'
  },
  {
    id: '7',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    publishedDate: '2003-03-18',
    genre: 'Mystery, Thriller',
    pages: 454,
    ISBN: '978-0-385-50420-1',
    language: 'English',
    publisher: 'Doubleday'
  },
  {
    id: '8',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    publishedDate: '2005-08-16',
    genre: 'Mystery, Thriller',
    pages: 465,
    ISBN: '978-0-307-45455-0',
    language: 'Swedish',
    publisher: 'Norstedts Förlag'
  },
  {
    id: '9',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    publishedDate: '1997-06-26',
    genre: 'Fantasy, Fiction',
    pages: 223,
    ISBN: '978-0-7475-3269-7',
    language: 'English',
    publisher: 'Bloomsbury Publishing'
  },
  {
    id: '10',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    publishedDate: '2008-09-14',
    genre: 'Dystopian, Science Fiction',
    pages: 374,
    ISBN: '978-0-439-02348-1',
    language: 'English',
    publisher: 'Scholastic'
  }
];
