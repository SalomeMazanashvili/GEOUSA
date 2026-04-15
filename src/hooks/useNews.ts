import { useQuery } from '@tanstack/react-query'
import { sanityClient, sanityConfigured } from '@/lib/sanity'
import type { NewsArticle } from '@/types/sanity'

const allNewsQuery = `*[_type == "news"] | order(publishedAt desc)`

export const useNews = () =>
  useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      if (!sanityConfigured) return [] as NewsArticle[]
      return sanityClient.fetch<NewsArticle[]>(allNewsQuery)
    },
  })
