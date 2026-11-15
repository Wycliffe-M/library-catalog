import type { Genre } from '../types/book'
import './GenreFilter.css'

interface GenreFilterProps {
  genres: Genre[]
  selected: string
  onSelect: (slug: string) => void
}

export function GenreFilter({ genres, selected, onSelect }: GenreFilterProps) {
  return (
    <div className="genre-filter" role="group" aria-label="Filter by genre">
      <button
        type="button"
        className={`genre-filter-button ${selected === 'all' ? 'genre-filter-button--active' : ''}`}
        aria-pressed={selected === 'all'}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          type="button"
          className={`genre-filter-button ${selected === genre.slug ? 'genre-filter-button--active' : ''}`}
          aria-pressed={selected === genre.slug}
          onClick={() => onSelect(genre.slug)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}