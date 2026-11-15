export interface Genre {
  id: number
  name: string
  slug: string
}

export interface Book {
  id: number
  title: string
  author: string
  isbn: string
  totalCopies: number
  availableCopies: number
  genre: Genre
}