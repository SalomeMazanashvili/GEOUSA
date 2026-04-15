export interface Vacancy {
  _id: string
  title: string
  slug?: { current: string }
  location?: string
  salary?: string
  isActive?: boolean
  publishedAt?: string
}

export interface NewsArticle {
  _id: string
  title: string
  slug?: { current: string }
  author?: string
  excerpt?: string
  featured?: boolean
  publishedAt?: string
}
