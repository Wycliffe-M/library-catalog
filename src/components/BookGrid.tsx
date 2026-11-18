import type { Book } from '../types/book'
import { BookCard } from './BookCard'
import './BookGrid.css'

interface BookGridProps {
  books: Book[]
  onSelectBook: (book: Book) => void
}

export function BookGrid({ books, onSelectBook }: BookGridProps) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onSelectBook={onSelectBook}
          onSelect={onSelectBook}
        />
      ))}
    </div>
  )
}

export default BookGrid
