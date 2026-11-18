import './EmptyState.css'

interface EmptyStateProps {
  onClear: () => void
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <h2 className="empty-state-title">No books match your search</h2>
      <p className="empty-state-text">
        Try a different title or author, or loosen the filters.
      </p>
      <button type="button" className="empty-state-button" onClick={onClear}>
        Clear filters
      </button>
    </div>
  )
}