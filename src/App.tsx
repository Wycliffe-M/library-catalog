import { useState } from 'react'
import { books } from './data/books'
import { BookGrid } from './components/BookGrid'
import { SearchBar } from './components/SearchBar'
import './App.css'

export default function App() {
  const [search, setSearch] = useState('')

  const query = search.trim().toLowerCase()
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query),
  )

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
        <BookGrid books={filteredBooks} />
      </main>
    </div>
  )
}