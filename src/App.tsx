import type { Book } from './types/book'
import { books } from './data/books'
import { BookGrid } from './components/BookGrid'
import './App.css'

export default function App() {
  const catalogBooks: Book[] = books

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Library Catalog</h1>
        <p className="app-subtitle">
          Browse our collection of timeless classics and modern favorites.
        </p>
      </header>
      <main>
        <BookGrid books={catalogBooks} />
      </main>
    </div>
  )
}
