import { useQuery } from '@tanstack/react-query'
import { sanityClient, sanityConfigured } from '@/lib/sanity'
import type { Vacancy } from '@/types/sanity'

const query = `*[_type == "vacancy" && isActive == true] | order(publishedAt desc)`

export const useVacancies = () =>
  useQuery({
    queryKey: ['vacancies'],
    queryFn: async () => {
      if (!sanityConfigured) return [] as Vacancy[]
      return sanityClient.fetch<Vacancy[]>(query)
    },
  })
