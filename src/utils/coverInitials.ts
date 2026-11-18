const SKIPPED_WORDS = ['the', 'a', 'an', 'of']

export function getCoverInitials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean)
  const meaningful = words.filter(
    (word) => !SKIPPED_WORDS.includes(word.toLowerCase()),
  )
  const source = meaningful.length > 0 ? meaningful : words

  if (source.length === 1) return source[0].slice(0, 2).toUpperCase()

  return source
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}