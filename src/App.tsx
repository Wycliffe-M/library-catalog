import { useState } from 'react'
import type { Book } from './types/book'
import { books, genres } from './data/books'
import { BookGrid } from './components/BookGrid'
import { SearchBar } from './components/SearchBar'
import { GenreFilter } from './components/GenreFilter'
import { AvailabilityToggle } from './components/AvailabilityToggle'
import { BookDetailModal } from './components/BookDetailModal'
import { EmptyState } from './components/EmptyState'
import './App.css'

export default function App() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('all')
  const [availableOnly, setAvailableOnly] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const query = search.trim().toLowerCase()
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    const matchesGenre = genre === 'all' || book.genre.slug === genre
    const matchesAvailability = !availableOnly || book.availableCopies > 0

    return matchesSearch && matchesGenre && matchesAvailability
  })

  const clearFilters = () => {
    setSearch('')
    setGenre('all')
    setAvailableOnly(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Library Catalog</h1>
        <p className="app-subtitle">
          Browse our collection of timeless classics and modern favorites.
        </p>
      </header>
      <main>
        <SearchBar value={search} onChange={setSearch} />
        <div className="filters">
          <GenreFilter genres={genres} selected={genre} onSelect={setGenre} />
          <AvailabilityToggle checked={availableOnly} onChange={setAvailableOnly} />
        </div>
        {filteredBooks.length === 0 ? (
          <EmptyState onClear={clearFilters} />
        ) : (
          <BookGrid books={filteredBooks} onSelectBook={setSelectedBook} />
        )}
      </main>
      {selectedBook !== null && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  )
}