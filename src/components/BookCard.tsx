import type { Book } from '../types/book'
import { getCoverInitials } from '../utils/coverInitials'
import './BookCard.css'

interface BookCardProps {
  book: Book
  onSelectBook?: (book: Book) => void
  onSelect?: (book: Book) => void
}

export function BookCard({ book, onSelectBook, onSelect }: BookCardProps) {
  const isAvailable = book.availableCopies > 0
  const initials = getCoverInitials(book.title)
  const availabilityText = isAvailable
    ? `${book.availableCopies} of ${book.totalCopies} available`
    : 'All copies out'

  const handleClick = () => {
    if (onSelectBook) {
      onSelectBook(book)
    } else if (onSelect) {
      onSelect(book)
    }
  }

  return (
    <article className="book-card">
      <div
        className={`book-card-cover cover cover--${book.genre.slug}`}
        aria-hidden="true"
      >
        {initials}
      </div>
      <div className="book-card-content">
        <span className="book-card-genre">{book.genre.name}</span>
        <h2 className="book-card-title">
          <button
            type="button"
            className="book-card-title-button"
            onClick={handleClick}
          >
            {book.title}
          </button>
        </h2>
        <p className="book-card-author">{book.author}</p>
        <div className="book-card-footer">
          <span
            className={`book-card-availability ${
              isAvailable
                ? 'book-card-availability--available availability--available'
                : 'book-card-availability--out availability--out'
            }`}
          >
            {availabilityText}
          </span>
        </div>
      </div>
    </article>
  )
}

export default BookCard
