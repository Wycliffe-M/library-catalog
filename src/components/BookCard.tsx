import type { Book } from '../types/book'
import './BookCard.css'

interface BookCardProps {
  book: Book
}

function getCoverInitials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean)
  return words
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}

export function BookCard({ book }: BookCardProps) {
  const isAvailable = book.availableCopies > 0
  const initials = getCoverInitials(book.title)
  const availabilityText = isAvailable
    ? `${book.availableCopies} of ${book.totalCopies} available`
    : 'All copies out'

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
        <h2 className="book-card-title">{book.title}</h2>
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
