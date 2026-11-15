import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search by title or author"
      aria-label="Search books by title or author"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}