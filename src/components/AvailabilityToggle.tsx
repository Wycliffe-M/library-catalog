import './AvailabilityToggle.css'

interface AvailabilityToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function AvailabilityToggle({ checked, onChange }: AvailabilityToggleProps) {
  return (
    <label className="availability-toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      Available only
    </label>
  )
}