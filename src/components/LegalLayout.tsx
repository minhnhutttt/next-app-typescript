
interface LegalLayoutProps {
  children: React.ReactNode
  title: string
}

export default function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
              {title}
            </h1>
            <div className="prose prose-gray max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}