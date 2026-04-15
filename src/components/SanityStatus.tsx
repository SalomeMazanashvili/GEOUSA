import { sanityConfigError } from '@/lib/sanity'

export function SanityStatus() {
  if (!sanityConfigError) return null

  return (
    <div className="mb-6 rounded-md border border-amber-500 bg-amber-50 p-4 text-amber-900">
      <p className="font-semibold">Sanity configuration required</p>
      <p className="text-sm">{sanityConfigError}</p>
    </div>
  )
}
