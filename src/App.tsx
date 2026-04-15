import { Navigate, Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/Index'
import NotFoundPage from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/index" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
