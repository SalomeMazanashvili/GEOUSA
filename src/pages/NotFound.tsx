import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-2 p-6 text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-slate-600">The page you requested was not found.</p>
      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </main>
  )
}
