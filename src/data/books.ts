import type { Book, Genre } from '../types/book'

const fantasy: Genre = { id: 1, name: 'Fantasy', slug: 'fantasy' }
const scienceFiction: Genre = { id: 2, name: 'Science Fiction', slug: 'science-fiction' }
const mystery: Genre = { id: 3, name: 'Mystery', slug: 'mystery' }
const nonFiction: Genre = { id: 4, name: 'Non-Fiction', slug: 'non-fiction' }

export const genres: Genre[] = [fantasy, scienceFiction, mystery, nonFiction]

export const books: Book[] = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '9780547928227', totalCopies: 4, availableCopies: 3, genre: fantasy },
  { id: 2, title: 'A Wizard of Earthsea', author: 'Ursula K. Le Guin', isbn: '9780547773742', totalCopies: 3, availableCopies: 3, genre: fantasy },
  { id: 3, title: 'The Name of the Wind', author: 'Patrick Rothfuss', isbn: '9780756404741', totalCopies: 2, availableCopies: 0, genre: fantasy },
  { id: 4, title: 'Dune', author: 'Frank Herbert', isbn: '9780441172719', totalCopies: 5, availableCopies: 2, genre: scienceFiction },
  { id: 5, title: 'Neuromancer', author: 'William Gibson', isbn: '9780441569595', totalCopies: 2, availableCopies: 2, genre: scienceFiction },
  { id: 6, title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin', isbn: '9780441478125', totalCopies: 3, availableCopies: 1, genre: scienceFiction },
  { id: 7, title: 'Foundation', author: 'Isaac Asimov', isbn: '9780553293357', totalCopies: 4, availableCopies: 4, genre: scienceFiction },
  { id: 8, title: 'Murder on the Orient Express', author: 'Agatha Christie', isbn: '9780062693662', totalCopies: 3, availableCopies: 0, genre: mystery },
  { id: 9, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', isbn: '9780486282145', totalCopies: 2, availableCopies: 1, genre: mystery },
  { id: 10, title: 'Gone Girl', author: 'Gillian Flynn', isbn: '9780307588371', totalCopies: 3, availableCopies: 3, genre: mystery },
  { id: 11, title: 'The Big Sleep', author: 'Raymond Chandler', isbn: '9780394758282', totalCopies: 2, availableCopies: 2, genre: mystery },
  { id: 12, title: 'Sapiens', author: 'Yuval Noah Harari', isbn: '9780062316110', totalCopies: 4, availableCopies: 4, genre: nonFiction },
  { id: 13, title: 'Educated', author: 'Tara Westover', isbn: '9780399590504', totalCopies: 3, availableCopies: 2, genre: nonFiction },
  { id: 14, title: 'Atomic Habits', author: 'James Clear', isbn: '9780735211292', totalCopies: 5, availableCopies: 5, genre: nonFiction },
  { id: 15, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isbn: '9780135957059', totalCopies: 2, availableCopies: 1, genre: nonFiction },
  { id: 16, title: 'Clean Code', author: 'Robert C. Martin', isbn: '9780132350884', totalCopies: 3, availableCopies: 3, genre: nonFiction },
]