import { useEffect, useRef } from 'react'
import type { Book } from '../types/book'
import { getCoverInitials } from '../utils/coverInitials'
import './BookDetailModal.css'

interface BookDetailModalProps {
  book: Book
  onClose: () => void
}

export function BookDetailModal({ book, onClose }: BookDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const isAvailable = book.availableCopies > 0
  const initials = getCoverInitials(book.title)
  const availabilityText = isAvailable
    ? `${book.availableCopies} of ${book.totalCopies} copies available`
    : 'All copies out'

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-detail-title"
        className="modal-dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          ref={closeButtonRef}
          className="modal-close-button"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <div
          className={`modal-cover cover cover--${book.genre.slug}`}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="modal-body">
          <span className="modal-genre">{book.genre.name}</span>
          <h2 id="book-detail-title" className="modal-title">
            {book.title}
          </h2>
          <p className="modal-author">{book.author}</p>
          <p className="modal-isbn">
            <span className="modal-isbn-label">ISBN:</span> {book.isbn}
          </p>
          <div className="modal-availability-container">
            <span
              className={`modal-availability ${
                isAvailable
                  ? 'modal-availability--available availability--available'
                  : 'modal-availability--out availability--out'
              }`}
            >
              {availabilityText}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailModal
