import { useNews } from '@/hooks/useNews'
import { useVacancies } from '@/hooks/useVacancies'
import { SanityStatus } from '@/components/SanityStatus'

export default function IndexPage() {
  const { data: vacancies = [], isLoading: vacanciesLoading } = useVacancies()
  const { data: news = [], isLoading: newsLoading } = useNews()

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-2 text-3xl font-bold">GeorgiaUSA</h1>
      <p className="mb-6 text-slate-600">React + Vite + Sanity CMS starter</p>

      <SanityStatus />

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Active Vacancies</h2>
        {vacanciesLoading ? (
          <p>Loading vacancies...</p>
        ) : vacancies.length === 0 ? (
          <p className="text-slate-500">No vacancies found.</p>
        ) : (
          <ul className="space-y-2">
            {vacancies.map((vacancy) => (
              <li key={vacancy._id} className="rounded border p-3">
                <p className="font-medium">{vacancy.title}</p>
                <p className="text-sm text-slate-600">{vacancy.location ?? 'Location not set'}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Latest News</h2>
        {newsLoading ? (
          <p>Loading news...</p>
        ) : news.length === 0 ? (
          <p className="text-slate-500">No news articles found.</p>
        ) : (
          <ul className="space-y-2">
            {news.map((article) => (
              <li key={article._id} className="rounded border p-3">
                <p className="font-medium">{article.title}</p>
                <p className="text-sm text-slate-600">{article.excerpt ?? 'No excerpt provided.'}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
